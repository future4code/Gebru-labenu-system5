import { Router } from "express";

import { TeamController } from "../controller/TeamController"
import { StudentController } from "../controller/StudentController"

export const router = Router();

const teamController = new TeamController()
const studentController = new StudentController()

router.post('/createTeam', teamController.createTeam)
router.get('/getTeamsActive', teamController.getTeamsActive)
router.put('/changeModule/:id', teamController.changeModuleTeam)

router.post('/createStudent', studentController.createStudent)