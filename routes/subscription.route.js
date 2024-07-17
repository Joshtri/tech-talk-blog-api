import * as subscriptionController from '../controllers/subscription.controller.js';
import express from 'express';
const router = express.Router();



router.post('/subscription', subscriptionController.postSubscription);


export default router;