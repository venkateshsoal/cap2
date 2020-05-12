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
