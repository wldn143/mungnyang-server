module.exports = function (sequelize, DataTypes) {
  const matching = sequelize.define(
    "matching",
    {
      //테이블 이름임
      field1: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true,
      },
      relatedingredient1: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient2: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient3: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient4: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient5: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient6: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient7: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient8: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient9: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient10: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient11: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient12: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient13: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient14: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient15: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient16: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient17: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient18: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      relatedingredient19: {
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
