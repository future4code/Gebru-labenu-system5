import { StudentDatabase } from "../data/StudentDatabase"
import { v4 as generateId } from 'uuid';
import { Student } from "../types/Student";
import { TeamDatabase } from "../data/TeamDatabase";

export class StudentBusiness {
    createStudent = async (input:any):Promise<void> => {
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
             
             const studentDatabase = new StudentDatabase()
             await studentDatabase.insertStudent({
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

    async getStudentByName(name: string): Promise<Student[]> {
        if (
            !name
         ) {
            throw new Error('Preencha o campo "nome"')
        }
        
        return await new StudentDatabase().getStudentByName(name);
    }

    changeStudentTeam = async(id: string ,input: any):Promise<void> => {
        try {
            const { name } = input
            if(!id || !name){
                throw new Error("Insira um id do estudante e o nome da turma!")
            }

            console.log("id", id, "name", name)

            const teamStudent = new TeamDatabase()
            const team = await teamStudent.getTeamByName(name)

            if(!team){
                throw new Error("Turma não encontrada")
            }

            const studentDatabase = new StudentDatabase()
            await studentDatabase.changeStudentTeam(id, team)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}