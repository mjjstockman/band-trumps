import { model, Schema, InferSchemaType } from 'mongoose';

const GigSchema: Schema = new Schema({
  band: { type: Schema.Types.ObjectId, ref: 'Band', required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  location: { type: String, required: true },
});

type Gig = InferSchemaType<typeof GigSchema>;

export default model<Gig>('Gig', GigSchema);
