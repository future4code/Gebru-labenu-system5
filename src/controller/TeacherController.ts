import { Request, Response } from "express"
import { TeacherBusiness } from "../business/TeacherBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export class TeacherController extends BaseDatabase {
    createTeacher = async (req: Request, res: Response) => {
        try {
            const input:any = {
                name: req.body.name,
                email: req.body.email,
                birth_date: req.body.birth_date,
                teamId: req.body.teamId
            }

            const teacherBusiness = new TeacherBusiness()
            await teacherBusiness.createTeacher(input)

            res.status(201).send({ message: "Docente criado com sucesso!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getTeachers = async(req: Request, res: Response) : Promise<void> =>  {	
        try {

            const teachers = await new TeacherBusiness().getTeachers();

            res.send(teachers).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    changeTeacherTeam = async(req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string
            const input:any = {
                name: req.body.name
            }

            const teacherBusiness = new TeacherBusiness()
            await teacherBusiness.changeTeacherTeam(id, input);

            res.status(200).send({ message: "Turma atualizada com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}