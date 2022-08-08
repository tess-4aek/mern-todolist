import { body } from 'express-validator';

export const taskValidation = [
    body('text', 'Minimum task length 10 characters').isLength({ min: 10 }),
    body('text', 'Maximum task length 255 characters').isLength({ max: 255 })
]