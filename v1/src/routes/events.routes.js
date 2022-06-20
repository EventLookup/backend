import { Router } from 'express';
import {
  // create
  createEvent,
  // read
  getAllEvents
  // update
  // delete
} from '../controller/events.controller.js';

const router = Router();

router.route('/events')
     // create
    .put(createEvent)
     // read
    .get(getAllEvents)
  

router.route('/events/:id')

export default router;
