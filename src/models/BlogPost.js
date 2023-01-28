const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      "BlogPost",
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,  
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          content: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "users",
              key: "id",
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          published: {
            type: DataTypes.DATE,
          },
          updated: {
            type: DataTypes.DATE,
          },
        });

          BlogPost.associate = (models) => {
            BlogPost.belongsTo(models.User, {
              as: "BlogPost",
              foreignKey: "id",
            });
        }
    return BlogPost;
  };
  
  module.exports = BlogPostSchema