const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
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
      categoryId: {
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
    },
    {
      tableName: "posts_categories",
      underscored: true,
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "BlogPost",
      through: PostCategory,
      otherKey: "post_id",
      foreignKey: "category_id",
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategory,
      otherKey: "category_id",
      foreignKey: "post_id",
    });
  };
  return PostCategory;
};

module.exports = PostCategorySchema;
