 import {
     schema as ourSchema,
     root
 } from './GraphQLSchema';
 import express from 'express';
 import graphqlHTTP from 'express-graphql';

 const app = express();

 app.use('/backend', graphqlHTTP({
     schema: ourSchema,
     rootValue: root,
     graphiql: true
 }));



 app.listen(8080, (error) => {
     console.log('listening to port 8080')
 });