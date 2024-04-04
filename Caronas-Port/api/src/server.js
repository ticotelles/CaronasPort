const express = require("express");
const cors = require("cors");
const knex = require("./database");
const app = express();
const appRoutes = require("./routes");

app.use(express.json());
app.use(cors());

(async () => {
  if ((await knex.schema.hasTable("users")) == false) {
    await knex.schema.createTable("users", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("telephone");
      table.string("vehicle");
      table.string("password");
    });

    console.log("criado a tabela users");
  }

  if ((await knex.schema.hasTable("ride")) == false) {
    await knex.schema.createTable("ride", function (table) {
      table.increments("id").primary();
      table.integer("user_id");
      table.string("origin");
      table.string("destination");
      table.dateTime("time");
      table.date("date");
      table.string("type");
      table.string("observation");
    });
    console.log("criado tabela Ride");
  }
})();

app.use("/", appRoutes);

app.listen("3333", function () {
  console.log("server rodando");
});
