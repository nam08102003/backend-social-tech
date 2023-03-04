import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.errCode).send({ errors: err.serializeErrors() });
  }

  res.status(422).json({ errors: [{ message: "Something broke! We're on it." }] });
};

export default errorHandler;
