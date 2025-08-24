import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';
import { registerValidator, loginValidator } from '../validators/authValidators.js';

const router = Router();

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);
router.post('/logout', logout);

export default router;
