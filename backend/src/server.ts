import 'dotenv/config';
import env from './util/validateEnv';
import mongoose from 'mongoose';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = env.PORT;

mongoose
  .connect(env.MONGODB_URI)
  .then(() => {
    console.log('Mongoose connected!!');
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(console.error);
