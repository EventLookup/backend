import { StatusCodes } from 'http-status-codes';
import Event from '../models/Event.model.js';

async function createEvent(req, res, next) {

  try {
    // MVP
    await Event.create(req.body);

    res.status(StatusCodes.CREATED).json({
     msg: `Event wurde erstellt`
    })
  } catch (error) {
    next(error)
  }
}



export {
  createEvent
}