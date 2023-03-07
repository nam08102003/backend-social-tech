import { Router } from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authControllers';

const router = Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/logout', logoutUser);

export default router;
