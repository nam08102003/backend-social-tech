import { Router, Request, Response } from 'express';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  res.send('Login');
});

router.post('/register', (req: Request, res: Response) => {
  res.send('Register');
});

router.post('/logout', (req: Request, res: Response) => {
  res.send('Logout');
});

export default router;
