module.exports = function (sequelize, DataTypes) {
  const Food = sequelize.define("Food", {
    //테이블 이름임
    foodInKor: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    foodInEng: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    ingredient: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  });
  return Food;
};
