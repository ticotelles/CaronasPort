const knex = require("../database");

class rideController {
  async create(req, res) {
    try {
      if (!req.body.origin) {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo origin é Obrigatório! ",
        });
      }

      if (!req.body.time) {
        return res.status(400).json({
          status: "ERROR",
          msg: "O time é Obrigatório! ",
        });
      }

      if (!req.body.destiny || req.body.destiny == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo destiny é Obrigatório! ",
        });
      }

      if (!req.body.date || req.body.date == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo date é Obrigatório! ",
        });
      }

      if (!req.body.type || req.body.time == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo type é Obrigatório!",
        });
      }

      if (req.body.type !== "offer" && req.body.type !== "request") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo type aceita somente 'offer' ou 'request'",
        });
      }

      const data = {
        user_id: req.body.user_id,
        origin: req.body.origin,
        destination: req.body.destiny,
        time: req.body.time,
        date: req.body.date,
        observation: req.body.observation,
        type: req.body.type,
      };

      await knex("ride").insert(data);

      res.status(201).json({ status: "ok" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async getAll(req, res) {
    try {
      const data = await knex("ride")
        .join("users", "ride.user_id", "=", "users.id")
        .select("ride.id", "ride.date", "ride.time", "users.name");

      res.status(200).json({ status: "ok", dataRes: data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async getOne(req, res) {
    try {
      const data = await knex("ride")
        .where("ride.id", req.params.id)
        .join("users", "ride.user_id", "=", "users.id")
        .select(
          "ride.id",
          "users.name",
          "users.vehicle",
          "users.telephone as phone",
          "ride.origin",
          "ride.destination as destiny",
          "ride.observation",
          "ride.type",
          "ride.time",
          "ride.type",
          "ride.date"
        )
        .first();

      if (data === undefined) {
        return res.status(400).json({
          status: "ERROR",
          msg: "Nâo encontrado!",
        });
      }
      res.status(200).json({
        status: "OK",
        dataRes: data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "ERROR",
        msg: error,
      });
    }
  }
}

module.exports = new rideController();
