const db = require("../models");
const Farmersp = db.farmersp;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  //console.log("hiiiiiiiiii");
    // Validate request
    if (!req.body.description) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
  
    // Create a upload
    const farmersp = {
      description: req.body.description,
      croptype: req.body.croptype,
      baseprice: req.body.baseprice,
      location: req.body.location,
      images: req.body.images,
      enddate: req.body.enddate
    };
    
    // Save farmerp in the database
    Farmersp.create(farmersp)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while adding products."
        });
      });
  };

  exports.findAll = (req, res) => {

    //const title = req.query.title;
    //var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Farmersp.findAll()
    .then(data => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send({
          "error": "No record found"
        })

      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving records."
      });
    });
  };

  //ssearch
  //findByCrop?croptype=wheat
  exports.findByCrop = (req, res) => {
    
    const crop = req.query.croptype;
    var condition = crop ? { croptype: { [Op.iLike]: `%${crop}%` } } : null;

  Farmersp.findAll({ where: condition })
    .then(data => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send({
          "error": "No record found"
        })

      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving records."
      });
    });
  };
