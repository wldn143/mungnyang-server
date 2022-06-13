module.exports = function (sequelize, DataTypes) {
  const recipes_dp = sequelize.define(
    "recipes_dp",
    {
      //테이블 이름임
      indexNO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      kinds: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      healthissue: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      recipe_name: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      recipe_description: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      ingredient1: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient1_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient2: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient2_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient3: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient3_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient4: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient4_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient5: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient5_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient6: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient6_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient7: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient7_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient8: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient8_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient9: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient9_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient10: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient10_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient11: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient11_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient12: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      ingredient12_weight: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      cooking_time: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      recipe_img: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
  return recipes_dp;
};
