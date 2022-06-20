import { body } from 'express-validator';

export const eventGetOneValidationSchema = [
    body('title')
        .unescape(),

    body('description')
        .unescape(),

    body('host')
        .unescape(),

    body('creatorUserId')
        .unescape()
]