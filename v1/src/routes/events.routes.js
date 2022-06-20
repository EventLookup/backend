import { Router } from 'express';
import {
  // create
  createEvent,
  // read
  getAllEvents,
  getSingleEvent,
  // update
  // delete
  deleteOneEvent
} from '../controller/events.controller.js';

const router = Router();

router.route('/events')
     // create
    .put(createEvent)
     // read
    .get(getAllEvents)
  

router.route('/events/:id')
    .get(getSingleEvent)
    .delete(deleteOneEvent)

export default router;
