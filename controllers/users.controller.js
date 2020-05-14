const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

exports.create = async(req, res) => {
  //console.log("hiiiiiiiiii");
    // Validate request
    if (!req.body.phonenumber) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

      let users = await Users.findOne({ phonenumber: req.body.phonenumber });
      //console.log("11111111",users);
      if(users) return res.status(400).send('phonenumber already registred');

    


     // users = await Users.findOne({ email: req.body.email });
     // if(users) return res.status(400).send('email already registred');
    
  
    // Create a user
    users = {
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      catg: req.body.catg
    };
    //console.log("11111111",users);
    // Save user in the database
    Users.create(users)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the users."
        });
      });
  };


