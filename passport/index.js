const passport = require('passport');
const local = require('./local');
const { REACT_SVT_ADMIN } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => { // 서버쪽에 [{ id: 1, cookie: 'clhxy' }]
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await REACT_SVT_ADMIN.findOne({ where: { id }});
            done(null, user); // req.user
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    local();
};