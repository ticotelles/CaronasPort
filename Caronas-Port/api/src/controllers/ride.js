const knex = require("../database");

class rideController {
  async create(req, res) {
    try {
      if (!req.body.origin || req.body.origin == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo Origem é Obrigatório! ",
        });
      }

      // if (!req.body.time || req.body.time == "") {
      //   return res.status(400).json({
      //     status: "ERROR",
      //     msg: "O Horário é Obrigatório! ",
      //   });
      // }

      if (!req.body.destiny || req.body.destiny == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo Destino é Obrigatório! ",
        });
      }

      if (!req.body.date || req.body.date == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo Horário é Obrigatório! ",
        });
      }
      if (!req.body.type || req.body.time == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O campo Tipo é Obrigatório!",
        });
      }

      const data = {
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
      const data = await knex("ride");
      res.status(200).json({ status: "ok", dataRes: data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async getOne(req, res) {
    try {
      const data = await knex("ride").where("id", req.params.id).first();
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
