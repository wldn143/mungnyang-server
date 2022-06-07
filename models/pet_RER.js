module.exports = function (sequelize, DataTypes) {
  const pet_RER = sequelize.define("Pet_RER", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    RER: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DER: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    meal_DER: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return pet_RER;
};
