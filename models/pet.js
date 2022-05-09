module.exports = function (sequelize, DataTypes) {
  const pet = sequelize.define("Pet", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_or_dog: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pet_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pet_age: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pet_sex: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pet_neuter: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pet_size: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pet_weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return pet;
};
