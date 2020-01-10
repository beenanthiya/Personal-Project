module.exports = (sequelize, DataType) => {

  const transaction = sequelize.define('transaction', {
    amount: {
      type: DataType.INTEGER(65)
    },
    trans_type: {
      type: DataType.STRING(60)
    },
    acc_number: {
      type: DataType.INTEGER(60)
    },
    acc_receive: {
      type: DataType.INTEGER(60)
    }
  })
  return transaction
}