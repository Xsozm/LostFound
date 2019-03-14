import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export const root = { hello: () => 'Hello world!' };

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));