import { MongoClient } from 'mongodb';
import { Database } from '../lib/types';

const { DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env;
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/<dbname>?retryWrites=true&w=majority`;

async function connectDB(): Promise<Database> {
  const client = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = client.db('main');

  return {
    listings: db.collection('test_listings')
  };
}

export default connectDB;
