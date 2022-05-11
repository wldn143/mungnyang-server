module.exports = function (sequelize, DataTypes) {
  const OCR_result_seafood = sequelize.define("OCR_result_seafood", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    crab: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shrimp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mackerel: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sardine: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    anchovy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cod: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    salmon: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tuna: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return OCR_result_seafood;
};
