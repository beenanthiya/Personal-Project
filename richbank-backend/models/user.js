module.exports = (sequelize, DataType) => {

  const user = sequelize.define('user', {
    first_name: {
      type: DataType.STRING(60)
    },
    last_name: {
      type: DataType.STRING(60)
    },
    telno: {
      type: DataType.STRING(60)
    },
    username: {
      type: DataType.STRING(60)
    },
    password: {
      type: DataType.STRING(60)
    },
    role: {
      type: DataType.ENUM('USER', 'ADMIN')
    }
  })
  user.associate = (models) => {
    user.hasMany(models.account, {
      foreignKey: 'user_id'
    })
  }
  return user
}