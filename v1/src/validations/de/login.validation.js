import { body } from 'express-validator';

export default [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Bitte gib deine Email-Adresse an.')
        .trim()
        .isEmail()
        .withMessage('Bitte gib eine gültige Email-Adresse an.')
        .normalizeEmail(),

    body('password')
        .not()
        .isEmpty()
        .withMessage('Bitte gib dein Passwort ein.')
        .trim()
        // als Login Abfrage nötig?
        // .isLength({min: 10})
        // .withMessage('Das Passwort muss mindestens 10 Zeichen lang sein.')
        // .isStrongPassword()
        // .withMessage('Das Passwort muss folgendes beinhalten: min. 1 Großbuschstaben, min. 1 Kleinbuschstaben, min. 1 Zahl, min. 1 Sonderzeichen.')
        .escape()
]