const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Admin } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password',
    }, async (userId, password, done) => {
        try {
            const user = await Admin.findOne({
                where: { userId }
            });
            if (!user) {
                return done(null, false, {reason: '존재하지 않는 아이디!'});
            }
            if (password===user.password) {
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
            console.error(error);
            return done(error);
        }
    }));
};