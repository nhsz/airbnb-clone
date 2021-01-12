// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import connectDB from './db';
import { resolvers, typeDefs } from './graphql';

const app = express();
const { PORT } = process.env;

const run = async (app: Application) => {
  const db = await connectDB();

  // Apollo Server setup
  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });
  server.applyMiddleware({ app, path: '/api' });

  app.listen(PORT, () => console.log(`[dev] running on http://localhost:${PORT}`));
};

run(app);
