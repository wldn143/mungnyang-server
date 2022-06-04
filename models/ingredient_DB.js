module.exports = function (sequelize, DataTypes) {
  const ingredient_DB = sequelize.define(
    "ingredient_DB",
    {
      //테이블 이름임
      indexNO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      foodGroups: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      foodDescription_KOR: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      foodDescription_ENG: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      energy: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      water: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      protein: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      fat: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      carbohydrate: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      dietaryFiber: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      calcium: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      iron: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      magnesium: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      phosphorus: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      potassium: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      sodium: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      zinc: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      manganese: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      selenium: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      iodine: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      niacinequivalents: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      pyridoxine: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      folate_DFE: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      vitaminB12: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      vitaminC: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      vitaminD: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
      vitaminE: {
        type: DataTypes.FLOAT(20),
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
  return ingredient_DB;
};
