import eventSchema from '../models/Event.model.js';
import { StatusCodes } from 'http-status-codes';

async function getAllEvents(req,res,next) {
    try {
        const events = await eventSchema.find();
        res.status(StatusCodes.OK).send(events);
    } catch(error) {
        next(error);
    }
};

export {
    getAllEvents
};