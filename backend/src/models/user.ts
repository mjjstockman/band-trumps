const mongoose = require('mongoose');
import { InferSchemaType, model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, select: false },
  password: { type: String, required: true, select: false },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});

type User = InferSchemaType<typeof UserSchema>;

export default model<User>('User', UserSchema);
