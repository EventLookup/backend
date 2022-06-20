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
    // später einen error handler erstellen der "Event konnte nicht erstellt werden" ausgibt
    next(error)
  }
}

async function getAllEvents(req,res,next) {
    try {
        const events = await Event.find();
        res.status(StatusCodes.OK).json({ 
          msg: 'Erfolgreicher Empfang von Eventdaten'
          events 
        });
    } catch(error) {
        // später einen error handler erstellen der "Eventdaten konnten nicht empfangen werden" ausgibt
        next(error);
    }
};

export {
  createEvent,
  getAllEvents
}
