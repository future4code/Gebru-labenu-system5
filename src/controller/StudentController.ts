import { Request, Response } from "express"
import { StudentBusiness } from "../business/StudentBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export class StudentController extends BaseDatabase {
    createStudent = async (req: Request, res: Response) => {
        try {
            const input:any = {
                name: req.body.name,
                email: req.body.email,
                birth_date: req.body.birth_date,
                teamId: req.body.teamId
            }

            const studentBusiness = new StudentBusiness()
            await studentBusiness.createStudent(input)

            res.status(201).send({ message: "Estudante criado com sucesso!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getStudentByName = async(req: Request, res: Response) : Promise<void> =>  {	
        try {

            const name = req.params.name

            const student = await new StudentBusiness().getStudentByName(name);

            res.send(student).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    changeStudentTeam = async(req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string
            const input:any = {
                name: req.body.name
            }

            const studentBusiness = new StudentBusiness()
            await studentBusiness.changeStudentTeam(id, input);

            res.status(200).send({ message: "Turma atualizada com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}