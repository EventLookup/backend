import { Router } from 'express';
import {
  createEvent
} from '../controller/events.controller.js';

const router = Router();

router.route('/events')
  .put(createEvent)

router.route('/events/:id')

export default router;