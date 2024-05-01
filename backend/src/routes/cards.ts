import express from 'express';
import * as CardsController from '../controllers/cards';

const router = express.Router();

router.get('/', CardsController.getCards);

export default router;
