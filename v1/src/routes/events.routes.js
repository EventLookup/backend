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

// validators
import {
  eventCreateValidationSchema,
  eventPatchValidationSchema,
} from '../validations/de/index.validations.js';

// validation function
import {
  validateRequest
} from '../middleware/validateRequest.middleware.js';

const router = Router();

router.route('/events')
     // create
    .put(eventCreateValidationSchema, validateRequest, createEvent)
     // read
    .get(getAllEvents)
  

router.route('/events/:id')
    .get(getSingleEvent)
    .patch(eventPatchValidationSchema, validateRequest, updateOneEvent)
    .delete(deleteOneEvent)

export default router;
