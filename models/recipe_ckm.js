module.exports = function (sequelize, DataTypes) {
  const recipes_ckm = sequelize.define(
    "recipes_ckm",
    {
      //테이블 이름임
      indexNO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cooking_method1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method3: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method4: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method5: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method6: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method7: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method8: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method9: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cooking_method10: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
  return recipes_ckm;
};
