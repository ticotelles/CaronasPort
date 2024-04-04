const knex = require("../database");

class loginController {
  async create(req, res) {
    try {
      const { body } = req;

      //buscando o usuario
      const user = await knex("users")
        .where({
          email: body.email,
        })
        .first();

      //usuario existe
      if (user === undefined) {
        return res.status(400).json({
          status: "ERROR",
          msg: "Usuario ou senha invalido!",
        });
      }

      //valida senha
      if (user.password !== body.pass) {
        return res.status(400).json({
          status: "ERROR",
          msg: "Usuario ou senha invalido!",
        });
      }

      res.status(200).json({ status: "OK", userId: user.id });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR" });
    }
  }
}

module.exports = new loginController();
