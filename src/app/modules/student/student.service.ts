import { TStudent } from './student.interface';
import { Student } from './student.model';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ _id: new ObjectId(id) });
  return result;
};

export const studentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
