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
};

async function getAllEvents(req,res,next) {
    try {
        const events = await Event.find();
        res.status(StatusCodes.OK).json({ 
          msg: 'Erfolgreicher Empfang von Eventdaten',
          events 
        });
    } catch(error) {
        // später einen error handler erstellen der "Eventdaten konnten nicht empfangen werden" ausgibt
        next(error);
    }
};

async function getSingleEvent(req,res,next) {
    const {id:eventId} = req.params;
    try{ 
        const event = await Event.findOne({_id: eventId});
        res.status(StatusCodes.OK).json({
            msg: 'Event gefunden und empfangen',
            event
        });
    } catch(error) {
        next(error);
    }
};


async function deleteOneEvent(req, res, next) {
  const { id:eventId } = req.params;

  try {
    const event = await Event.findOneAndDelete({ _id: eventId });

    res.status(StatusCodes.OK).json({
      msg: `Event mit der ID: ${eventId} wurde gelöscht!`
    });
  } catch (error) {
    next(error);
  }
}
export {
  createEvent,
  getAllEvents,
  getSingleEvent,
  deleteOneEvent
}
