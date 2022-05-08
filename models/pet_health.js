module.exports = function (sequelize, DataTypes) {
  const pet_health = sequelize.define("Pet_health", {
    //테이블 이름임
    pet_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Pet",
        key: "pet_id",
      },
    },
    health_id: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
  });
  return pet_health;
};
