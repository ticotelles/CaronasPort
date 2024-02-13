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
      table.date("date_birth");
      table.string("password");
    });

    console.log("criado a tabela users");
  }

  if ((await knex.schema.hasTable("offerRide")) == false) {
    await knex.schema.createTable("offerRide", function (table) {
      table.increments("id").primary();
      table.string("origin");
      table.string("destination");
      table.dateTime("time");
      table.integer("price");
      table.date("date");
      table.boolean("animals");
      table.boolean("baggage");
      table.integer("telephone");
      table.string("description");
    });
    console.log("criado tabela offerRide");
  }

  if ((await knex.schema.hasTable("requestRide")) == false) {
    await knex.schema.createTable("requestRide", function (table) {
      table.increments("id").primary();
      table.string("origin");
      table.string("destination");
      table.dateTime("time");
      table.date("date");
      table.integer("telephone");
      table.string("description");
    });
    console.log("criado a tabela requestRide");
  }
  
})();

app.use("/", appRoutes);

app.listen("3333", function () {
  console.log("server rodando");
});
