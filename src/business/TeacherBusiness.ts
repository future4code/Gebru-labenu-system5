import { TeacherDatabase } from "../data/TeacherDatabase"
import { v4 as generateId } from 'uuid';
import { Teacher } from "../types/Teacher";

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
}