import { Router } from "express";

import { TeamController } from "../controller/TeamController"

export const router = Router();

const teamController = new TeamController()

router.post('/createTeam', teamController.createTeam)