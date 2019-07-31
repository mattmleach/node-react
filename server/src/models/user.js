const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    models.User.hasMany(models.Task);
  };

  User.beforeCreate(user => {
    return bcrypt
      .hash(user.password, 10)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  });

  User.prototype.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password).then(isMatch => {
      callback(isMatch);
    });
  };

  return User;
};
