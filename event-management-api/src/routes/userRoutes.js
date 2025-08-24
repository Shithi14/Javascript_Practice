import { Router } from 'express';
import { getMe, updateMe } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
import { updateMeValidator } from '../validators/authValidators.js';

const router = Router();

router.get('/me', protect, getMe);
router.patch('/me', protect, updateMeValidator, updateMe);

export default router;
