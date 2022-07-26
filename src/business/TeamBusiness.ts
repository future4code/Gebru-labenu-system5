import { TeamDatabase } from "../data/TeamDatabase"
import { v4 as generateId } from 'uuid';

export class TeamBusiness {
    createTeam = async (input:any):Promise<void> => {
        try {
            const {name} = input
            if (
                !name
             ) {
                throw new Error('Preencha o campo "nome"')
             }
             
             const useDatabase = new TeamDatabase()
             await useDatabase.insertTeam({
                id: generateId(),
                name
             })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}