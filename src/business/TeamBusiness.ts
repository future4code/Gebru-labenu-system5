import { TeamDatabase } from "../data/TeamDatabase"
import { v4 as generateId } from 'uuid';
import {Team } from "../types/Team";

export class TeamBusiness {
    createTeam = async (input:any):Promise<void> => {
        try {
            const {name} = input
            if (
                !name
             ) {
                throw new Error('Preencha o campo "nome"')
             }
             
             const teamDatabase = new TeamDatabase()
             await teamDatabase.insertTeam({
                id: generateId(),
                name
             })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async getTeamsActive(): Promise<Team[]> {				
        return await new TeamDatabase().getTeamsActive();
    }

    changeModuleTeam = async(id: string ,input: any):Promise<void> => {
        try {
            const { mod } = input
            if(!id || !mod){
                throw new Error("Insira um id e o nome do modulo!")
            }

            if(
                mod !== 'Module01' && 
                mod !== 'Module02' && 
                mod !== 'Module03' && 
                mod !== 'Module04' &&
                mod !== 'Module05' &&
                mod !== 'Module06'
            ){
                throw new Error('Insira um dos modulos aceitaveis ["Module01", "Module02", "Module03", "Module04", "Module05", "Module06"]!')
            }
            const teamDatabase = new TeamDatabase()
            await teamDatabase.changeModuleTeam(id, {mod})

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}