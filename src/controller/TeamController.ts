import { Request, Response } from "express"
import { TeamBusiness } from "../business/TeamBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

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

    getTeamsActive = async(req: Request, res: Response) : Promise<void> =>  {	
        try {

            const teams = await new TeamBusiness().getTeamsActive();

            res.send(teams).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }

    changeModuleTeam = async(req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string
            const input:any = {
                mod: req.body.module
            }

            const teamBusiness = new TeamBusiness()
            await teamBusiness.changeModuleTeam(id, input);

            res.status(200).send({ message: "Modulo da turma atualizado com sucesso" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}