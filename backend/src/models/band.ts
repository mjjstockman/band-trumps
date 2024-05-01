const mongoose = require('mongoose');

import { model, Schema, InferSchemaType } from 'mongoose';

const BandSchema: Schema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  location: { type: String, required: true },
  spotifyID: { type: String },
});

type Band = InferSchemaType<typeof BandSchema>;

export default model<Band>('Band', BandSchema);
