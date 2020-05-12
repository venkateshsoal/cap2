
    const users = require("../controllers/users.controller.js");
    const farmers = require("../controllers/farmersp.controller.js");

    var router = require("express").Router();

    router.post("/users", users.create);

    router.post("/farmers", farmers.create);

    module.exports = router;