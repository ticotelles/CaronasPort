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
      if (!req.body.name || req.body.name == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O nome é obrigatório!",
        });
      };

      if (!req.body.email || req.body.email == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O E-mail é obrigatório!",
        })
      };

      if (!req.body.phone || req.body.phone == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O Telefone é obrigatório!",
        })
      };
      
      // if (!req.body.valueInputDate || req.body.valueInputDate == "") { 
      //   return res.status(400).json({
      //     status: "ERROR",
      //     msg: "A Data é obrigatório!",
      //   })
      // };

      if (!req.body.pass || req.body.pass == "") {
        return res.status(400).json({
          status: "ERROR",
          msg: "O password é obrigatório!",
        })
      };

      const user = await knex("users").where({email: req.body.email}).first();
     
      //valida se o usuário existe
      if (user !== undefined) {
        return res.status(400).json({
          status: "ERROR",
          msg: "E-mail já cadastrado!"
        });
      }
 

      res.status(201).json({ status: "OK" });

      const data = {
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.phone,
        vehicle: req.body.vehicle,
        password: req.body.pass,
      };

      await knex("users").insert(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }
}

module.exports = new usersController();
