'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Teacher, {through: models.Schedule});
      Student.belongsToMany(models.Subject, {through: models.Schedule});
    }
  };
  Student.init({
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
    modelName: 'Student',
  });
  return Student;
};