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
}