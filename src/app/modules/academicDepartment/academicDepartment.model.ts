import { model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { Schema } from 'mongoose';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.model';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: AcademicFaculty,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
export const AcademicDepartment = model<TAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
