import { body } from 'express-validator';

export default [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Pflichtfeld! Bitte fülle dieses Feld aus.')
        .trim()
        .isEmail()
        .withMessage('Bitte gib eine gültige Email-Adresse an.')
        .normalizeEmail(),

    body('username')
        .not()
        .isEmpty()
        .withMessage('Pflichtfeld! Bitte fülle dieses Feld aus.')
        .trim()
        .isLength({min: 3, max: 50})
        .withMessage('Der Username muss muss zwischen 3 und 50 Zechen lang sein.')
        .not()
        .matches(/\W/)
        .withMessage('Der Username darf keine Sonderzeichen enthalten.'),

    body('password')
        .not()
        .isEmpty()
        .withMessage('Pflichtfeld! Bitte fülle dieses Feld aus.')
        .trim()
        .isLength({min: 10})
        .withMessage('Das Passwort muss mindestens 10 Zeichen lang sein.')
        .isStrongPassword()
        .withMessage('Das Passwort muss folgendes beinhalten: min. 1 Großbuschstaben, min. 1 Kleinbuschstaben, min. 1 Zahl, min. 1 Sonderzeichen.')
        .escape()
]