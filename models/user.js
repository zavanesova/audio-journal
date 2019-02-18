module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: DataTypes.TEXT
  });

  User.associate = function(models) {
    // Associating User with Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return User;
};
