const mongoose = require('mongoose');
import { InferSchemaType, model, Schema } from 'mongoose';

const cardSchema = new Schema(
  {
    // band: { type: Schema.Types.ObjectId, ref: 'Band', required: true },
    // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // gigsAttended: [{ type: Schema.Types.ObjectId, ref: 'Gig' }],
    numberOfGigs: Number,
    merchandisePurchased: Number,
    spotifyStreams: Number,
  },
  { timestamps: true }
);

type Card = InferSchemaType<typeof cardSchema>;

export default model<Card>('Card', cardSchema);
