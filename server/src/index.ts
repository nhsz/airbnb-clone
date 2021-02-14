// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import helmet from 'helmet';
import connectDB from './db';
import { resolvers, typeDefs } from './graphql';

const app = express();

const { PORT } = process.env;
const { SECRET } = process.env;

app.use(
  // GraphQL Playground needs this option disabled to work
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(cookieParser(SECRET));

const run = async (app: Application) => {
  const db = await connectDB();

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
