module.exports = function (sequelize, DataTypes) {
  const health_problem = sequelize.define("Health_problem", {
    //테이블 이름임
    health: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  });
  return health_problem;
};
