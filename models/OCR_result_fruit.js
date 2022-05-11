module.exports = function (sequelize, DataTypes) {
  const OCR_result_fruit = sequelize.define("OCR_result_fruit", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    w_melon: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    melon: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mandarine: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    orange: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    apple: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    banana: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    guava: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return OCR_result_fruit;
};
