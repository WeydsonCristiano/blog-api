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
          userId: {
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
        }, { 
          tableName: 'blog_posts',
          underscored : true,
          timestamps: false,
        }
        );

          BlogPost.associate = (models) => {
            BlogPost.belongsTo(models.User, {
              as: "user",
              foreignKey: "userId",
            });
        }
    return BlogPost;
  };
  
  module.exports = BlogPostSchema