const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs')

module.exports = (app, db) => {

    app.get("/getAccounts", passport.authenticate("jwt", {
        session: false
    }), (req, res) => {
        db.account.findAll({
                where: {
                    user_id: req.user.id
                },
                include: [{
                        model: db.user,
                        attributes: ['first_name', 'last_name']
                    },
                    // {
                    //     model: db.transaction,
                    //     attributes: ['acc_send', 'acc_receive', 'amount_send']
                    // }
                ]
            })
            .then(result => {
                res.status(201).send(result)
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    })

    app.post("/addAccount", passport.authenticate("jwt", {
        session: false
    }), (req, res) => {
        console.log(req.headers)
        db.account.create({
                user_id: req.user.id,
                acc_type: req.body.acc_type,
                acc_number: req.body.acc_number,
                amount: req.body.amount
            })
            .then(result => {
                res.status(201).send("create acc sucess")
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    })

    app.put("/updateBalance", passport.authenticate("jwt", {
        session: false
    }), (req, res) => {
        db.account.update({
            amount: req.body.amount_send
        }, {
            where: {
                acc_number: req.body.acc_send
            }
        })
        db.account.update({
                amount: req.body.amount_receive
            }, {
                where: {
                    acc_number: req.body.acc_receive
                }
            })
            .then(result => {
                res.status(200).send("update sucess")
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    })

    app.delete("/deleteAccount", (req, res) => {
        db.user.destroy({
                where: {
                    id: req.body.id
                }
            })
            .then(result => {
                res.status(200).send("delete sucess")
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    })
}