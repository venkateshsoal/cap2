module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      catg: {
        type: Sequelize.STRING
      }
      
    });
  
    return Users;
  };