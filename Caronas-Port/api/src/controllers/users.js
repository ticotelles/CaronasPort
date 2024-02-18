const knex = require("../database");

class usersController {
  async getAll(req, res) {
    try {
      const data = await knex("users");
      res.status(200).json({ status: "OK", dataRes: data });
      console.log(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async create(req, res) {
    try {
      if (!req.body.valueInputName || req.body.valueInputName == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O nome é obrigatório!",
        });
      };

      if (!req.body.valueInputEmail || req.body.valueInputEmail == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O E-mail é obrigatório!",
        })
      };

      if (!req.body.valueInputPhone || req.body.valueInputPhone == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O Telefone é obrigatório!",
        })
      };
      
      if (!req.body.valueInputDate || req.body.valueInputDate == "") { 
        return res.status(400).json({
          status: "ERROR",
          msg: "A Data é obrigatório!",
        })
      };

      if (!req.body.valueInputPassword || req.body.valueInputPassword == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O password é obrigatório!",
        })
      };

      res.status(201).json({ status: "OK" });

      const data = {
        name: req.body.valueInputName,
        email: req.body.valueInputEmail,
        telephone: req.body.valueInputPhone,
        date_birth: req.body.valueInputDate,
        password: req.body.valueInputPassword,
      };

      await knex("users").insert(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }
}

module.exports = new usersController();
