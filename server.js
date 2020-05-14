const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models"); 
const config1 = require("./config1")
const routes= require("./routes/routes");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

const client = require("twilio")(config1.accountSID, config1.authToken)

app.use(cors(corsOptions));
db.sequelize.sync();
//console.log(db.sequelize);
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
}); 

app.use('/api', routes);

app.get('/login', (req,res)=> {
  client
        .verify 
        .services(config1.serviceID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel
        })
        .then((data) => {
            res.status(200).send(data)
        })
})

app.get('/verify', (req,res) => {
  client
       .verify
       .services(config1.serviceID)
       .verificationChecks
       .create({
          to: `+${req.query.phonenumber}`,
          code: req.query.code
       }).then((data) => {
           res.status(200).send(data)
       })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});