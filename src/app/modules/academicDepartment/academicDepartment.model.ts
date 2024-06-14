import { model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { Schema } from 'mongoose';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';

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

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExists) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This Department is already exist',
    );
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExists = await AcademicDepartment.findOne(query);

  if (!isDepartmentExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This department does not exists');
  }

  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
