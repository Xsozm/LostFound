import {
    buildSchema,GraphQLObjectType,GraphQLSchema
} from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export const root = {
    hello: () => 'Hello world!'
};