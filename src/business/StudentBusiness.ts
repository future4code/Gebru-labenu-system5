import { StudentDatabase } from "../data/StudentDatabase"
import { v4 as generateId } from 'uuid';

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
}