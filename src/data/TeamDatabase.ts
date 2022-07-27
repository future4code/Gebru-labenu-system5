import { Team } from "../types/Team";
import { BaseDatabase } from "./BaseDatabase";

export class TeamDatabase extends BaseDatabase {
    insertTeam = async(team: Team): Promise<void> => {
        try {
            await BaseDatabase.connection.insert({
                id: team.id,
                name: team.name
             }).into('labenusystem_team')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    getTeamsActive = async(): Promise<Team[]> => {
        try {
            const teams: Team[] = [];

            const result = await BaseDatabase.connection()
                .select("*")
                .from('labenusystem_team')
                .where(`module`, '!=', 'Module00');

            for(let team of result){
                teams.push(team);
            }

            return teams;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    changeModuleTeam = async(id:string ,input: any): Promise<void> => {
        try {  
            await BaseDatabase.connection('labenusystem_team')
                .where({id: id})
                .update({module: input.mod})

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    getTeamByName = async(name: string): Promise<Team[]> => {
        try {
            const team = await BaseDatabase.connection()
                .select("*")
                .from('labenusystem_team')
                .where({name: name});

            return team;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}