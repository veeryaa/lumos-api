'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Membership.init({
    member_rank: DataTypes.STRING(10),
    deskripsi: DataTypes.STRING,
    minimum_poin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};