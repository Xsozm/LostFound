import knex from "knex";

const database = knex({
  client: "mysql",
  connection: {
    host: mysql,
    user: "hazem",
    password: "hazem",
    database: "lostandfound"
  }
});

export default database;
