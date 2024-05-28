import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// will call controller

router.get('/', studentController.getAllStudents);

router.get('/:studentId', studentController.getSingleStudent);

export const StudentRouter = router;