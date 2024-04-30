import 'dotenv/config';
import express from 'express';
import CardModel from './models/card';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
