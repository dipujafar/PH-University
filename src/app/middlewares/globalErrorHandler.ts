import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';
import handleZodError from '../error/handleZodError';
import handleValidationError from '../error/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err?.message || 'Something Went wrong';

  let errorSource: TErrorSources = [
    {
      path: '',
      message: 'Something Went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  }
  // ultimate return

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    stack: config?.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
