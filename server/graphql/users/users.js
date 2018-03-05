import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { random, name, image } from 'faker';
import isEmpty from 'validator/lib/isEmpty';

import {
  UserType,
  UserInputType,
} from './usersTypes';

const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      const users = await new Promise(resolve =>
        setTimeout(() =>
          resolve(new Array(20).fill(undefined).map(() => ({
            id: random.uuid(),
            name: name.findName(),
            description: name.jobDescriptor(),
            imageUrl: image.avatar(),
          }))), 100),
      );
      return users;
    },
  },
};

const userMutations = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLNonNull(UserInputType),
      },
    },
    resolve: async (rootValue, { input }) => {

      if (!isEmpty(input.name)) {
        throw new Error("Name field can't be empty");
      }

      if (!isEmpty(input.description)) {
        throw new Error("Description field can't be empty");
      }

      if (!isEmpty(input.imageUrl)) {
        throw new Error("ImageUrl field can't be empty");
      }

      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(input, {
            id: random.uuid(),
          })), 100);
      });
      return result;
    },
  },
};

export {
  userQueries,
  userMutations,
};
