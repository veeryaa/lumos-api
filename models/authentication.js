'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authentication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Authentication.init({
    id_customer: { 
      type: DataTypes.STRING,
      references: {
        model: 'Customers',
        key: 'id_customer'
      }
    },
    no_handphone: DataTypes.STRING(15),
    passw0rd: DataTypes.STRING,
    notif_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Authentication',
  });
  return Authentication;
};