const knex = require('../database');

class offerController{
    async create(req, res) {
      try {
        if (!req.body.valueInputOrigin || req.body.valueInputOrigin == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Origem é Obrigatório! ")
            })
        }; 

        if (!req.body.valueInputHour || req.body.valueInputHour == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O Horário é Obrigatório! ")
            })
        }; 
        
        if (!req.body.valueInputDestiny || req.body.valueInputDestiny == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Destino é Obrigatório! ")
            })
        };  

        if (!req.body.valueInputDate || req.body.valueInputDate == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Horário é Obrigatório! ")
            })
        }; 

        if (!req.body.valueInputDesiredValue || req.body.valueInputDesiredValue == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O Valor é Obrigatório! ")
            })
        }; 

        if (!req.body.valueInputNumberContact || req.body.valueInputNumberContact == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O Contato é Obrigatório! ")
            })
        };

        const data = {
          origin: req.body.valueInputOrigin,
          destination: req.body.valueInputDestiny,
          time: req.body.valueInputHour,
          date: req.body.valueInputDate,
          price: req.body.valueInputDesiredValue,
          animals: req.body.valueCheckBoxAnimals,
          baggage: req.body.valueCheckBoxBaggage,
          telephone: req.body.valueInputNumberContact,
          description: req.body.valueTextFieldDescribe
        }
        await knex("offerRide").insert(data);

          
          res.status(201).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async getAll(req, res) {
        try {
          const data = await knex("offerRide");
          res.status(200).json({ status: "ok", daraRes: data });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async put(req, res) {
        try {
          const data = await knex("offer");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async delete(req, res) {
        try {
          const data = await knex("offerRide").where("id", req.params.id).first();

          if (data === undefined) {
            return res.status(400).json({
              status: "ERROR",
              msg: "Não encontrado!"
            });
          }
          await knex("offerRide").where("id", req.params.id).delete();

          res.status(200).json({ status: "OK" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
      };
};

module.exports = new offerController();