import { TeacherDatabase } from "../data/TeacherDatabase"
import { v4 as generateId } from 'uuid';
import { Teacher } from "../types/Teacher";
import { TeamDatabase } from "../data/TeamDatabase";

export class TeacherBusiness {
    createTeacher = async (input:any):Promise<void> => {
        try {
            const {
                name,
                email,
                birth_date,
                teamId
            } = input
            if (
                !name ||
                !email ||
                !birth_date ||
                !teamId
             ) {
                throw new Error('Preencha os campos "nome", "email", "birth_date", "teamId"')
             }
             
             const teacherDatabase = new TeacherDatabase()
             await teacherDatabase.insertTeacher({
                id: generateId(),
                name,
                email,
                birth_date,
                teamId
             })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async getTeachers(): Promise<Teacher[]> {
        const teachers = await new TeacherDatabase().getTeachers();
        if(!teachers) {
            throw new Error('Não existe docentes cadastrados!')
        }
        
        return teachers
    }

    changeTeacherTeam = async(id: string ,input: any):Promise<void> => {
        try {
            const { name } = input
            if(!id || !name){
                throw new Error("Insira um id do docente e o nome da turma!")
            }

            const teamTeacher = new TeamDatabase()
            const team = await teamTeacher.getTeamByName(name)

            if(!team){
                throw new Error("Turma não encontrada")
            }

            const teacherDatabase = new TeacherDatabase()
            await teacherDatabase.changeTeacherTeam(id, team)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}