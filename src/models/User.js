const UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.User, {
      as: "user",
      foreignKey: "id",
    });
  };

  return User;
};

module.exports = UserSchema;
