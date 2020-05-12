module.exports = (sequelize, Sequelize) => {
    const Farmersp = sequelize.define("farmersp", {
      description: {
        type: Sequelize.STRING
      },
      croptype: {
        type: Sequelize.STRING
      },
      baseprice: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      enddate: {
        type: Sequelize.STRING
      } 

    });
  
    return Farmersp;
  };