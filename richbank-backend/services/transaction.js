const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs')

module.exports = (app, db) => {
    app.post("/getTransaction", (req, res) => {
        db.transaction.findAll({
                where: {
                    acc_number: req.account.acc_number
                },
                include: [{
                    model: db.account,
                    attributes: ['amount']
                }]
            })
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    })

    app.post("/transaction", (req, res) => {
        db.transaction.create({
                amount: req.body.amount,
                trans_type: "Transfer",
                acc_number: req.account.acc_number,
                acc_receive: req.body.acc_receive
            })
            .then(resule => {
                res.status(201).send("transaction complete")
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    })
}