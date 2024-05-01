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

export const createCard: RequestHandler = async (req, res, next) => {
  const numberOfGigs = req.body.numberOfGigs;
  const merchandisePurchased = req.body.merchandisePurchased;
  const spotifyStreams = req.body.spotifyStreams;

  try {
    const newCard = await CardModel.create({
      numberOfGigs: numberOfGigs,
      merchandisePurchased: merchandisePurchased,
      spotifyStreams: spotifyStreams,
    });

    res.status(201).json(newCard);
  } catch (error) {
    next(error);
  }
};
