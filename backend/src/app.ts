import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import CardModel from './models/card';

const app = express();

app.get('/', async (req, res, next) => {
  //   res.send('Hello, World!');
  try {
    // throw Error('An error!');
    const cards = await CardModel.find().exec();
    res.status(200).json(cards);
  } catch (error) {
    next(error);
  }
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred';
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});
export default app;
