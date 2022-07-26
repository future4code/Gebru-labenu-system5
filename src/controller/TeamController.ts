import { Request, Response } from "express"
import { TeamBusiness } from "../business/TeamBusiness"

export class TeamController {
    createTeam = async (req: Request, res: Response) => {
        try {
            const input:any = {
                name: req.body.name,
            }

            const teamBusiness = new TeamBusiness()
            await teamBusiness.createTeam(input)

            res.status(201).send({ message: "Turma criada com sucesso!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}