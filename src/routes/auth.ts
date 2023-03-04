import { Router, Request, Response } from 'express';
import ValidationErrors from '../errors/ValidationErrors';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  const { user } = req.body;

  if (!user) {
    throw new ValidationErrors('Need username', 'username');
  }
});

router.post('/register', (req: Request, res: Response) => {
  res.send('Register');
});

router.post('/logout', (req: Request, res: Response) => {
  res.send('Logout');
});

export default router;
