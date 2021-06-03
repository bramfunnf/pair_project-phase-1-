'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subject.belongsToMany(models.Student, {through: models.Schedule});
      Subject.belongsToMany(models.Teacher, {through: models.Schedule});
    }
  };
  Subject.init({
    subjectName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "Subject Name tidak boleh kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};