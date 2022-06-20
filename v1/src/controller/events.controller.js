import Event from '../models/Event.model.js';

async function createEvent(req, res, next) {

  try {
    // MVP
    const event = Event.create(req.body);
  } catch (error) {
    next(error)
  }
}



export {
  createEvent
}