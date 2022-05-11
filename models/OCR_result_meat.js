module.exports = function (sequelize, DataTypes) {
  const OCR_result_meat = sequelize.define("OCR_result_meat", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    duck: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lamb: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    beef: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    chicken: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    turckey: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pork: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return OCR_result_meat;
};
