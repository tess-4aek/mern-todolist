import { body } from 'express-validator';

export const taskValidation = [
    body('text', 'Minimum task length 10 characters').isLength({ min: 10 })
]