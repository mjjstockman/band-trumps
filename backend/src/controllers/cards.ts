import { RequestHandler } from 'express';
import CardModel from '../models/card';

export const getCards: RequestHandler = async (req, res, next) => {
  try {
    const cards = await CardModel.find().exec();
    res.status(200).json(cards);
  } catch (error) {
    next(error);
  }
};
