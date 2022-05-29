module.exports = function (sequelize, DataTypes) {
  const allergy_food = sequelize.define("allergy_food", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    allergy_food_id: {
      allowNull: true,
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  });
  return allergy_food;
};
