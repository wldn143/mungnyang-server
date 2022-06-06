module.exports = function (sequelize, DataTypes) {
  const matching = sequelize.define(
    "matching",
    {
      //테이블 이름임
      recipe_ingredient: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      db_ingredient: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
  return matching;
};
