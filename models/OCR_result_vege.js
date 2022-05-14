module.exports = function (sequelize, DataTypes) {
  const OCR_result_vege = sequelize.define("OCR_result_vege", {
    //테이블 이름임
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    carrot: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    corn: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    potato: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    s_potato: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pumpkin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    broccoli: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cabbage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pea: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tomato: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    seaweed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return OCR_result_vege;
};
