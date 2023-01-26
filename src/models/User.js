

const UsersSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('user',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'users',
        underscored: true,
        timestamps:false
    })

    UserTable.associate = (models) => {
        UserTable.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_users'
        })
    }

    return UserTable
}

module.exports = UsersSchema