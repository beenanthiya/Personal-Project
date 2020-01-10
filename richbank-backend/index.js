const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./services/user');
const accountService = require('./services/account')
const db = require('./models');
const cors = require('cors')
const passport = require('passport');
const app = express();


app.use(passport.initialize());
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./config/passport/passport')

db.sequelize.sync({
    alter: true
}).then(() => {

    userService(app, db)
    accountService(app, db)


    app.get('/protected', passport.authenticate('jwt', {
            session: false
        }),
        function (req, res) {
            res.send(req.user);
        });

    app.listen(8080, () => {
        console.log("Server is running on port 8080")
    });
})