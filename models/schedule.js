'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedule.init({
    SubjectId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    link: DataTypes.STRING,
    student_limit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};