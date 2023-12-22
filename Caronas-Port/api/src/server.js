const express = require("express");
const cors = require("cors");
const knex = require("./database");

const app = express();

app.use(express.json());
app.use(cors());



(async () => {
    if ((await knex.schema.hasTable("users")) == false) {
      await knex.schema.createTable("users", function (table) {
        table.increments("id").primary();
        table.string("name");
        table.string("email");
        table.string("whats");
        table.string("city");
        table.string("eventId");
        table.timestamps(true, true);
      });
      console.log("criado a tabela users");
    }
})();








app.listen("3333", function () {
    console.log("server rodando");
});