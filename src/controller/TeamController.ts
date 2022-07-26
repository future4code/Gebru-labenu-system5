import { Request, Response } from "express"
import { TeamBusiness } from "../business/TeamBusiness"
import { BaseDatabase } from "../data/BaseDatabase"
import { Team } from "../types/Team"

export class TeamController extends BaseDatabase {
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

    async getTeamsActive(req: Request, res: Response) : Promise<void>  {	
        try {

            const teams = await new TeamBusiness().getTeamsActive();

            res.send(teams).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }
}