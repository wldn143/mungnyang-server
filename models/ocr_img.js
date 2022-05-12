module.exports = function (sequelize, DataTypes) {
  const ocr_img = sequelize.define("Ocr", {
    //테이블 이름임

    meatImageUrl: {
      allowNull: true,
      type: DataTypes.STRING(30),
    },
    fruitImageUrl: {
      allowNull: true,
      type: DataTypes.STRING(30),
    },
    fishImageUrl: {
      allowNull: true,
      type: DataTypes.STRING(30),
    },
    vegeImageUrl: {
      allowNull: true,
      type: DataTypes.STRING(30),
    },
    nutImageUrl: {
      allowNull: true,
      type: DataTypes.STRING(30),
    },
  });
  return ocr_img;
};
