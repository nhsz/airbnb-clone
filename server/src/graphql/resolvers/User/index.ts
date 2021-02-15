import { IResolvers } from 'apollo-server-express';

const userResolvers: IResolvers = {
  Query: {
    user: () => 'Query.user'
  }
};

export { userResolvers };
