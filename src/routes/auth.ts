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
import { registerSchema, loginSchema } from '../validation/userValidation';
import validateRequest from '../middlewares/validateReq';

const router = Router();

router.post('/me', getInfoUserByToken);
router.post('/login', validateRequest(loginSchema), loginUser);

router.post('/register', validateRequest(registerSchema), registerUser);
router.post('/verify-otp-register', verifyOtpRegister);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword);

router.post('/logout', logoutUser);

export default router;
