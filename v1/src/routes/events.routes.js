import { Router } from 'express';
import { getAllEvents } from '../controller/events.controller.js';

const router = Router();

router.route('/events')
    .get(getAllEvents)

export default router