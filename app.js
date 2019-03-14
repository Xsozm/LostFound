 import {
     schema as ourSchema,
     root
 } from './GraphQLSchema';
 import express from 'express';
 import graphqlHTTP from 'express-graphql';

 const app = express();

 app.use('/graphql', graphqlHTTP({
     schema: ourSchema,
     rootValue: root,
     graphiql: true
 }));

 app.listen(4000, () => {
     console.log('listening to port 4000')
 });