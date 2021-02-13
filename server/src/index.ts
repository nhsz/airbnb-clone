// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import helmet from 'helmet';
import connectDB from './db';
import { resolvers, typeDefs } from './graphql';

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
const { PORT } = process.env;
const { SECRET } = process.env;

const run = async (app: Application) => {
  const db = await connectDB();

  app.use(cookieParser(SECRET));

  // Apollo Server setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res })
  });
  server.applyMiddleware({ app, path: '/api' });

  app.listen(PORT, () => console.log(`[dev] running on http://localhost:${PORT}`));
};

run(app);
