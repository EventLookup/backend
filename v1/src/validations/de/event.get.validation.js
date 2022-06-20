import { body } from 'express-validator';

export default eventGetValidationSchema = [
    body('title')
        .unescape(),

    body('description')
        .unescape(),

    body('host')
        .unescape(),

    body('creatorUserId')
        .unescape()
]