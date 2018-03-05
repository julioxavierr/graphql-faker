import {
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    }
  }),
});

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'User payload definition',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export {
  UserType,
  UserInputType,
};
