import Joi from 'joi';

// UserName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/, '{#label} must be capitalized')
    .messages({
      'string.base': 'First name must be a string',
      'string.empty': 'First name is required',
      'string.max': 'First name cannot be more than 20 characters',
      'any.required': 'First name is required',
      'string.pattern.base': '{#label} must be capitalized',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/, 'alpha')
    .messages({
      'string.base': 'Last name must be a string',
      'string.empty': 'Last name is required',
      'any.required': 'Last name is required',
      'string.pattern.name': '{#label} is not valid',
    }),
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.base': 'Father name must be a string',
    'string.empty': 'Father name is required',
    'any.required': 'Father name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.base': 'Father occupation must be a string',
    'string.empty': 'Father occupation is required',
    'any.required': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{11}$/, 'digits')
    .messages({
      'string.base': 'Father contact number must be a string',
      'string.empty': 'Father contact number is required',
      'any.required': 'Father contact number is required',
      'string.pattern.name':
        'Father contact number must be a valid 11-digit number',
    }),
  motherName: Joi.string().trim().required().messages({
    'string.base': 'Mother name must be a string',
    'string.empty': 'Mother name is required',
    'any.required': 'Mother name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.base': 'Mother occupation must be a string',
    'string.empty': 'Mother occupation is required',
    'any.required': 'Mother occupation is required',
  }),
  motherContact: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{11}$/, 'digits')
    .messages({
      'string.base': 'Mother contact number must be a string',
      'string.empty': 'Mother contact number is required',
      'any.required': 'Mother contact number is required',
      'string.pattern.name':
        'Mother contact number must be a valid 11-digit number',
    }),
});

// LocalGuardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Local guardian name must be a string',
    'string.empty': 'Local guardian name is required',
    'any.required': 'Local guardian name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.base': 'Local guardian occupation must be a string',
    'string.empty': 'Local guardian occupation is required',
    'any.required': 'Local guardian occupation is required',
  }),
  contact: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{11}$/, 'digits')
    .messages({
      'string.base': 'Local guardian contact number must be a string',
      'string.empty': 'Local guardian contact number is required',
      'any.required': 'Local guardian contact number is required',
      'string.pattern.name':
        'Local guardian contact number must be a valid 11-digit number',
    }),
});

// Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.base': 'Id must be a string',
    'string.empty': 'Id is required',
    'any.required': 'Id is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#label} is not a valid gender',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string()
    .trim()
    .pattern(/^\d{4}-\d{2}-\d{2}$/, 'ISO 8601 date')
    .messages({
      'string.pattern.name': '{#label} must be in the format YYYY-MM-DD',
    }),
  email: Joi.string().trim().email().required().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
    'string.email': '{#label} is not a valid email',
  }),
  contactNo: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{11}$/, 'digits')
    .messages({
      'string.base': 'Contact number must be a string',
      'string.empty': 'Contact number is required',
      'any.required': 'Contact number is required',
      'string.pattern.name': 'Contact number must be a valid 11-digit number',
    }),
  emergencyContactNo: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{11}$/, 'digits')
    .messages({
      'string.base': 'Emergency contact number must be a string',
      'string.empty': 'Emergency contact number is required',
      'any.required': 'Emergency contact number is required',
      'string.pattern.name':
        'Emergency contact number must be a valid 11-digit number',
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': '{#label} is not a valid blood group',
      'any.required': 'Blood group is required',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.base': 'Present address must be a string',
    'string.empty': 'Present address is required',
    'any.required': 'Present address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.base': 'Permanent address must be a string',
    'string.empty': 'Permanent address is required',
    'any.required': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required',
  }),
  profileImg: Joi.string().trim().uri().messages({
    'string.uri': '{#label} must be a valid URL',
  }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .required()
    .messages({
      'any.only': '{#label} is not a valid status',
      'any.required': 'Status is required',
    }),
});

export default studentValidationSchema;
