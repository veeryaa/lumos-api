'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
    {
      id_customer: DataTypes.STRING,
      fullname: DataTypes.STRING,
      kota: DataTypes.STRING,
      email: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      member_rank: {
        type: DataTypes.STRING(10),
        references: {
          model: 'Memberships',
          key: 'member_rank',
        },
      },
    },
    {
      sequelize,
      modelName: 'Customer',
    }
  );
  return Customer;
};
