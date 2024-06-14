import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name can not be more than 20 characters, you typed {VALUE}')
    .nonempty('First name is required'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().nonempty('Last name is required'),
});

const createGuardianValidationSchema = z.object({
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

const createLocalGuardianValidationSchema = z.object({
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
    student: z.object({
      name: createUserNameValidationSchema,
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
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      profileImg: z.string().trim().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name can not be more than 20 characters, you typed {VALUE}')
    .nonempty('First name is required')
    .optional(),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().nonempty('Last name is required').optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().trim().nonempty('Father name is required').optional(),
  fatherOccupation: z
    .string()
    .trim()
    .nonempty('Father occupation is required')
    .optional(),
  fatherContactNo: z
    .string()
    .trim()
    .nonempty('Father contact number is required')
    .optional(),
  motherName: z.string().trim().nonempty('Mother name is required').optional(),
  motherOccupation: z
    .string()
    .trim()
    .nonempty('Mother occupation is required')
    .optional(),
  motherContact: z
    .string()
    .trim()
    .nonempty('Mother contact number is required')
    .optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Local guardian name is required')
    .optional(),
  occupation: z
    .string()
    .trim()
    .nonempty('Local guardian occupation is required')
    .optional(),
  contact: z
    .string()
    .trim()
    .nonempty('Local guardian contact number is required')
    .optional(),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema.optional(),
      gender: z
        .enum(['male', 'female', 'other'], {
          message: '{VALUE} is not a valid gender',
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .trim()
        .email('Invalid email address')
        .nonempty('Email is required')
        .optional(),
      contactNo: z
        .string()
        .trim()
        .nonempty('Contact number is required')
        .optional(),
      emergencyContactNo: z
        .string()
        .trim()
        .nonempty('Emergency contact number is required')
        .optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
          message: '{VALUE} is not a valid blood group',
        })
        .optional(),
      presentAddress: z
        .string()
        .trim()
        .nonempty('Present address is required')
        .optional(),
      permanentAddress: z
        .string()
        .trim()
        .nonempty('Permanent address is required')
        .optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      profileImg: z.string().trim().optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
