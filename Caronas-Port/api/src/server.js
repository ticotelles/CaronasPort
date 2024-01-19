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
      table.string("telephone");
      table.date("date_birth");
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
  }
  console.log("criado a tabela requestRide");
})();

app.listen("3333", function () {
  console.log("server rodando");
});

/*--------------------------USERS----------------------------*/
app.post("/users", function (req, res) {
  try {
    res.status(201).json({ status: "ok"});
  } catch (error) {
    console.log(error)
  }
  
});

app.get("/users", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/users", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/users", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

/*--------------------------search----------------------------*/

app.get("/search", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

/* -------------------------offer---------------------------*/

app.post("/offer", function (req, res) {
  try {
    res.status(201).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/offer", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/offer", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/offer", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

/* -------------------------request---------------------------*/

app.post("/request", function (req, res) {
  try {
    res.status(201).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/request", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/request", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/request", function (req, res) {
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
