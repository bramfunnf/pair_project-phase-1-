'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teacher.belongsToMany(models.Subject, {through: models.Schedule});
      Teacher.belongsToMany(models.Student, {through: models.Schedule});
    }
  };
  Teacher.init({
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "username tidak boleh kosong"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "password tidak boleh kosong"
        }
      }
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};