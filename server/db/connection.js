import { MongoClient, ServerApiVersion } from 'mongodb';
require('dotenv').config();

const uri = process.env.ATLAS_URI || '';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  console.log('Connected to MongoDB successfully!');
} catch (err) {
  console.error('Error connecting to MongoDB:', err);
}
