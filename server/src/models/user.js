// eslint-disable
module.exports = (sequelize, DataTypes) =>
// define model user with attri.
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
