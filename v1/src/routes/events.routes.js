import { Router } from 'express';
import {
  // create
  createEvent,
  // read
  getAllEvents,
  getSingleEvent,
  // update
  updateOneEvent,
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
    .patch(updateOneEvent)
    .delete(deleteOneEvent)

export default router;
