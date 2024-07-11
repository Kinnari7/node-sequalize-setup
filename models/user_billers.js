'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_billers = sequelize.define('user_billers', {
    userId: DataTypes.INTEGER,
    billerId :{
     type: DataTypes.STRING,
     allowNull: false,
    },
    billerType : {
     type: DataTypes.STRING,
     allowNull : false
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: false,
  });
  user_billers.associate = function(models) {
    // associations can be defined here
  };
  return user_billers;
};