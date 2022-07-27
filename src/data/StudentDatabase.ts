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

    getStudentByName = async(name: string): Promise<Student[]> => {
        try {
            const student = await BaseDatabase.connection()
                .select("*")
                .from('labenusystem_students')
                .where({name: name});

            return student;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    changeStudentTeam = async(id:string ,team: any): Promise<void> => {
        try {  
            console.log(team[0].id)
            await BaseDatabase.connection('labenusystem_students')
                .where({id: id})
                .update({teamId: team[0].id})

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}