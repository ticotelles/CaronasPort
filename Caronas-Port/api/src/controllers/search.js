const knex = require('../database');

class searchController{
    async getAll(req, res) {
        try {
          const data = await knex("search");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    }
    

};

module.exports = new searchController();