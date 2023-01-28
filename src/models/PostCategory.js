const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "blog_posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "BlogPost",
      through: PostCategory,
      otherKey: 'post_id',
      foreignKey: 'category_id',
    });
  models.BlogPost.belongsToMany(models.Category, {
    as: "categories",
    through: PostCategory,
    otherKey: 'category_id',
    foreignKey: 'post_id',
  });

  };
  return PostCategory;
};

module.exports = PostCategorySchema;
