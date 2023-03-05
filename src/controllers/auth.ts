import { createUser } from '../services/userServices';
import { Request, Response } from 'express';
import ValidationErrors from '../errors/ValidationErrors';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const newUser = await createUser(data);
    console.log(newUser);
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Have some errors', 'errors');
  }
};
