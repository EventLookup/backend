import { body } from 'express-validator';

export const eventGetAllValidationSchema = [
    body('title')
        .unescape(),

    body('description')
        .unescape(),

    body('host')
        .unescape(),

    body('creatorUserId')
        .unescape()
]