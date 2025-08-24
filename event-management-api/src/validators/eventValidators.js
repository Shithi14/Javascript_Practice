import { body } from 'express-validator';

export const createEventValidator = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').optional().isString(),
  body('date').trim().notEmpty().withMessage('Date is required'),
  body('time').trim().notEmpty().withMessage('Time is required'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('organizerName').trim().notEmpty().withMessage('Organizer name is required'),
  body('eventBanner').optional().isString(),
];

export const updateEventValidator = [
  body('title').optional().trim().isLength({ min: 1 }),
  body('description').optional().isString(),
  body('date').optional().trim().isLength({ min: 1 }),
  body('time').optional().trim().isLength({ min: 1 }),
  body('location').optional().trim().isLength({ min: 1 }),
  body('organizerName').optional().trim().isLength({ min: 1 }),
  body('eventBanner').optional().isString(),
];
