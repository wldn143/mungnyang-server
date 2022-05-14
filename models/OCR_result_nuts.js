module.exports = function (sequelize, DataTypes) {
  const OCR_result_nuts = sequelize.define("OCR_result_nuts", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    bean: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    peanut: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flour: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return OCR_result_nuts;
};
