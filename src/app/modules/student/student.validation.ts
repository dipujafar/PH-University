import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name can not be more than 20 characters, you typed {VALUE}')
    .nonempty('First name is required'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().nonempty('Last name is required'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().nonempty('Father name is required'),
  fatherOccupation: z.string().trim().nonempty('Father occupation is required'),
  fatherContactNo: z
    .string()
    .trim()
    .nonempty('Father contact number is required'),
  motherName: z.string().trim().nonempty('Mother name is required'),
  motherOccupation: z.string().trim().nonempty('Mother occupation is required'),
  motherContact: z
    .string()
    .trim()
    .nonempty('Mother contact number is required'),
});

const localGuardianValidationSchema = z.object({
  name: z.string().trim().nonempty('Local guardian name is required'),
  occupation: z
    .string()
    .trim()
    .nonempty('Local guardian occupation is required'),
  contact: z
    .string()
    .trim()
    .nonempty('Local guardian contact number is required'),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other'], {
        message: '{VALUE} is not a valid gender',
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .trim()
        .email('Invalid email address')
        .nonempty('Email is required'),
      contactNo: z.string().trim().nonempty('Contact number is required'),
      emergencyContactNo: z
        .string()
        .trim()
        .nonempty('Emergency contact number is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
        message: '{VALUE} is not a valid blood group',
      }),
      presentAddress: z.string().trim().nonempty('Present address is required'),
      permanentAddress: z
        .string()
        .trim()
        .nonempty('Permanent address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().trim().optional(),
      admissionSemester: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
