import { config } from "dotenv";
import { schema as ourSchema, root } from "./GraphQLSchema";
import Sequelize from "sequelize";
import express from "express";
import graphqlHTTP from "express-graphql";
import Models from "./database/models";
config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  "/backend",
  graphqlHTTP({
    schema: ourSchema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(PORT, error => {
  if (error) {
    console.log(error);
  } else {
    console.log(`listening to port ${PORT}`);
  }
});

/**Sequelize will keep the connection open by default,
 * and use the same connection for all queries. If you need to close the connection,
 *  call sequelize.close() (which is asynchronous and returns a Promise).
 *  */
const sequelize = new Sequelize("lostandfound", "hazem", "hazem", {
  host: "mysql",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Models.User.findAll({ attributes: ["username"] })
//   .then(users => {
//     console.log(users[0].get({ plain: true }).username);
//   })
//   .catch(err => {
//     console.log(err);
//   });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
