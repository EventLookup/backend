import { body } from 'express-validator';

export default [
    body('title')
        .unescape(),

    body('description')
        .unescape(),

    body('host')
        .unescape(),

    body('creatorUserId')
        .unescape()
]