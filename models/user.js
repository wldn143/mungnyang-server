module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define("User", {
    //테이블 이름임
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pet_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  });
  return user;
};
