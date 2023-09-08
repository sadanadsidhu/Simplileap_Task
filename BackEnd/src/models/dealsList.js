module.exports = (sequelize, DataTypes) => {
  const Deals = sequelize.define("deals", {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointmentdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.TEXT,
    },
  });
  return Deals;
};
