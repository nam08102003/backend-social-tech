import { Router, Request, Response } from 'express';
import { registerUser } from '../controllers/auth';
import ValidationErrors from '../errors/ValidationErrors';

const router = Router();

router.post('/login', registerUser);

router.post('/register', registerUser);

router.post('/logout', (req: Request, res: Response) => {
  res.send('Logout');
});

export default router;
