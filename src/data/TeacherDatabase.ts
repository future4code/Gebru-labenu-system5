import { Teacher } from "../types/Teacher";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDatabase extends BaseDatabase {
    insertTeacher = async(teacher: Teacher): Promise<void> => {
        try {
            await BaseDatabase.connection.insert({
                id: teacher.id,
                name: teacher.name,
                email: teacher.email,
                birth_date: teacher.birth_date,
                teamId: teacher.teamId
             }).into('labenusystem_teacher')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getTeachers= async(): Promise<Teacher[]> => {
        try {
            const teacher = await BaseDatabase.connection()
                .select("*")
                .from('labenusystem_teacher');

            return teacher;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}