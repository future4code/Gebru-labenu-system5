import { Router } from "express";

import { TeamController } from "../controller/TeamController"
import { StudentController } from "../controller/StudentController"
import { TeacherController } from "../controller/TeacherController";

export const router = Router();

const teamController = new TeamController()
const studentController = new StudentController()
const teacherController = new TeacherController()

router.post('/createTeam', teamController.createTeam)
router.get('/getTeamsActive', teamController.getTeamsActive)
router.put('/changeModule/:id', teamController.changeModuleTeam)

router.post('/createStudent', studentController.createStudent)
router.get('/student/:name', studentController.getStudentByName)
router.put('/changeStudentTeam/:id', studentController.changeStudentTeam)

router.post('/createTeacher', teacherController.createTeacher)
router.get('/getTeachers', teacherController.getTeachers)
router.put('/changeTeacherTeam/:id', teacherController.changeTeacherTeam)