import { Router } from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  verifyOtpRegister,
  forgetPassword,
  resetPassword,
  getInfoUserByToken
} from '../controllers/authControllers';

const router = Router();

router.post('/login', loginUser);
router.post('/me', getInfoUserByToken);

router.post('/register', registerUser);
router.post('/verify-otp-register', verifyOtpRegister);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword);

router.post('/logout', logoutUser);

export default router;
