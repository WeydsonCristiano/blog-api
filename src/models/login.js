
const loginSchema = (sequelize, DataTypes) => {
    const loginTable = sequelize.define('Login', {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      tableName: 'login',
      underscored: true
    })


    // loginTable.associate = ({ loginSchema }) => {
    //   LoginTable.hasMany(, {
    //     foreignKey: 'i'
    //   })
    // }

  return loginTable;
};


module.exports = loginSchema;