import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import createError from 'http-errors';
// import { User } from './models/user';
// import { v4 as uuidv4 } from 'uuid';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
