module.exports = function (sequelize, DataTypes) {
  const raw_ingredient = sequelize.define("Raw_Ingredient", {
    //테이블 이름임
    category: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    ingredient: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  });
  return raw_ingredient;
};
