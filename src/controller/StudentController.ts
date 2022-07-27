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
}