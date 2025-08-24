import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { createEventValidator, updateEventValidator } from '../validators/eventValidators.js';

const router = Router();

router.use(protect); // all event routes protected

router.post('/', createEventValidator, createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.patch('/:id', updateEventValidator, updateEvent);
router.delete('/:id', deleteEvent);

export default router;
