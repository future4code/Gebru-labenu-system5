import { Student } from "../types/Student";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    insertStudent = async(student: Student): Promise<void> => {
        try {
            await BaseDatabase.connection.insert({
                id: student.id,
                name: student.name,
                email: student.email,
                birth_date: student.birth_date,
                teamId: student.teamId
             }).into('labenusystem_students')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}