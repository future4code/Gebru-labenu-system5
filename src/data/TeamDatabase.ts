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

    async getTeamsActive(): Promise<Team[]> {
        try {
            const teams: Team[] = [];

            const result = await BaseDatabase.connection()
                .select("*")
                .from('labenusystem_team')
                .where(`module`, '!=', '0');

            for(let team of result){
                teams.push(team);
            }

            return teams;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}