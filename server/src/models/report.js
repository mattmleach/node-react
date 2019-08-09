module.exports = (sequelize, DataTypes) => {
  let Report = sequelize.define("Report", {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    templateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    outputFileName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Report;
};
