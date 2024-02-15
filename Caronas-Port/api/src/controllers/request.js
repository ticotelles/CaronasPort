const knex = require("../database");

class requestController {
  async create(req, res) {
    try {
      if (!req.body.valueInputOrigin || req.body.valueInputOrigin == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "A origem é obrigatório!",
        });
      }

      if (!req.body.valueInputDestiny || req.body.valueInputDestiny == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O Destino é obrigatório!",
        });
      }

      if (!req.body.valueInputDate || req.body.valueInputDate == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "A Data é obrigatório!",
        });
      }

      if (!req.body.valueInputNumber || req.body.valueInputNumber == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O Telefone  é obrigatório!",
        });
      }

      const data = {
        origin: req.body.valueInputOrigin,
        destination: req.body.valueInputDestiny,
        time: req.body.valueInputHour,
        date: req.body.valueInputDate,
        telephone: req.body.valueInputNumber,
      };

      await knex("requestRide").insert(data);
      res.status(201).json({ status: "ok", dataRes: data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async getAll(req, res) {
    try {
      const data = await knex("requestRide");
      res.status(200).json({ status: "ok", dataRes: data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async put(req, res) {
    try {
      const data = await knex("requestRide");
      res.status(200).json({ status: "ok" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async delete(req, res) {
    try {
      const data = await knex("requestRide").where("id", req.params.id).first();
      if (data === undefined) {
        return res.status(400).json({
          status: "ERROR",
          msg: "Não encontrado!",
        });
      }

      await knex("requestRide").where("id", req.params.id).delete();

      res.status(200).json({ status: "OK" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }
}

module.exports = new requestController();
