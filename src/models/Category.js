const CategorySchema = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      "Category",
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
         name: {
          type: DataTypes.STRING,
          allowNull: false,
          }
      },
      {
        tableName: "categories",
        underscored: true,
        timestamps: false,
      }
    );
    return Category;
  };
  
  module.exports = CategorySchema;
  