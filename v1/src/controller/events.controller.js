import { StatusCodes } from 'http-status-codes';
import Event from '../models/Event.model.js';
import { 
  BadRequestError,
  NotFound,
  Unauthorized
} from '../errorHandler/index.js';

async function createEvent(req, res, next) {
  try {
    // MVP
    const event = await Event.create(req.body);
    event.saveUserId(req.user.userId);

    res.status(StatusCodes.CREATED).json({
     msg: `Event wurde erstellt`
    })
  } catch (error) {
    // Internal Server Error
    next(error)
  }
};

async function getAllEvents(req,res,next) {
    try {
        const events = await Event.find();

        if(!events){
          throw new BadRequestError('Konnte keine Events finden!');
        }
        res.status(StatusCodes.OK).json({ 
          msg: 'Erfolgreicher Empfang von Eventdaten',
          events 
        });
    } catch(error) {
        next(error);
    }
};

async function getSingleEvent(req,res,next) {
    const {id:eventId} = req.params;
    try{ 
        const event = await Event.findOne({ _id: eventId });

        if(!event){
          throw new BadRequestError(`Kein passendes Event gefunden!`);
        }

        await event.populate({ path: 'creator', select: 'username -_id'})

        res.status(StatusCodes.OK).json({
            msg: 'Event gefunden und empfangen',
            event
        });
    } catch(error) {
        next(error);
    }
};

async function updateOneEvent(req,res,next) {
    const {id:eventId} = req.params;
    const {body:newEvent} = req;

    try{
        const event = await Event.findOne({ _id: eventId });

        if(!event){
          throw new NotFound(`Kein Event mit der ID: ${eventId} gefunden!`)
        }
        
        await Event.findOneAndUpdate(
          { _id: eventId },
          newEvent
        );

        res.status(StatusCodes.OK).json({ 
            msg: 'Event wurde erfolgreich aktualisiert',
            newEvent
        })
    } catch(error) {
        next(error);
    }
};


async function deleteOneEvent(req, res, next) {
  const { id:eventId } = req.params;

  try {
    const event = await Event.findOne({ _id: eventId });

    if(!event) {
      throw new NotFound(`Kein Event mit der ID: ${eventId} gefunden!`);
    }

    if(event.creator.toString() !== req.user.userId){
      throw new Unauthorized('Dieses Event darf nur der Ersteller löschen!')
    }

    await Event.findOneAndDelete({ _id: eventId });
   

    res.status(StatusCodes.OK).json({
      msg: `Das Event ${event.title} wurde gelöscht!`
    });
  } catch (error) {
    next(error);
  }
};

export {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateOneEvent,
  deleteOneEvent
}
