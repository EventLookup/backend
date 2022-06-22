import { body } from 'express-validator';

export default [
    body('title')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Bitte fülle dieses Feld aus!')
        .isLength({max: 50})
        .withMessage('Der Titel darf maximal 50 Zeichen lang sein.'),
    
    body('description')
        .trim()
        // Kein Zwang zur Angabe
        // .not()
        // .isEmpty()
        // .withMessage('Bitte fülle dieses Feld aus!')
        .isLength({max: 250})
        .withMessage('Die Beschreibung darf maximal 250 Zeichen lang sein.')
        .escape(),
    
    body('location.street')
        .trim()
        // Wirklich Zahlen rausfiltern? Es gibt Straßen mit dem Namen 'Straße 442' oder anderer Zahl
        // .matches(/\d/)
        // .withMessage('Der Straßenname darf keine Zahlen enthalten.')
        .isLength({max: 50}),
    
    body('location.houseNr')
        .trim()
        .isLength({min: 1, max: 3})
        .withMessage('Die Hausnummer muss zwischen 1 und 999 sein.'),
    
    body('location.city')
        .trim()
        .isLength({max: 32})
        .withMessage('Der Stadtname darf maximal 32 Zeichen lang sein.')
        .not()
        .matches(/\d/)
        .withMessage('Der Stadtname darf keine Zahlen enthalten.'),
    
    body('location.zip')
        .trim()
        .isLength({min: 5, max: 5})
        .withMessage('Die PLZ muss 5 Zeichen lang sein.')
        .not()
        .matches(/\D/)
        .withMessage('Die PLZ muss aus Zahlen bestehen.'),
    
    body('host')
        .not()
        .isEmpty()
        .withMessage('Bitte fülle dieses Feld aus.')
        .trim()
        .isLength({min: 3, max: 50})
        .withMessage('Der Hostname muss muss zwischen 3 und 50 Zechen lang sein.')
        .not()
        .matches(/\W/)
        .withMessage('Der Hostname darf keine Sonderzeichen enthalten.')
        .escape(),
  /*       
    body('eventTime')
        .not()
        .isEmpty()
        .withMessage('Bitte fülle dieses Feld aus.')
        .isISO8601()
        .withMessage('Bitte gib eine gültige Uhrzeit an.'),
     */
   /*  body('eventDate')
        .not()
        .isEmpty()
        .withMessage('Bitte fülle dieses Feld aus.')
        .isISO8601()
        .withMessage('Bitte gib ein gültiges Datum an.'), */
    
    body('cancelled')
        .not()
        .isEmpty()
        .withMessage('Cancelled muss auf true oder false gesetzt sein.')
        .trim()
        .isBoolean()
        .withMessage('Der Wert muss "true" oder "false" sein.'),
    
    body('postponed')
        .not()
        .isEmpty()
        .withMessage('Postponed muss auf true oder false gesetzt sein.')
        .trim()
        .isBoolean()
        .withMessage('Der Wert muss "true" oder "false" sein.'),
    
    body('maxParticipants')
        /* .not()
        .isEmpty()
        .withMessage('Bitte fülle dieses Feld aus.') */
        .not()
        .matches(/\D/)
        .withMessage('Die Teilnehmerzahl darf nur aus Zahlen bestehen.')
        .isLength({max: 5})
        .withMessage('Die maximale Anzahl an Teilnehmern beträgt 99999'),
    
    body('website')
        .trim()
        .isURL()
        .withMessage('Bitte gib eine gültige URL ein.')
]