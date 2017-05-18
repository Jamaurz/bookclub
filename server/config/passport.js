'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, email, password, done) {
            // check in mongo if a user with username exists or not
            User.findOne({ 'email' :  email },
                function(err, user) {
                    req.session.message = 'successfully logged';
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Username does not exist, log the error and redirect back
                    if (!user){
                        //console.log('User Not Found with username ' + email);
                        req.session.message = 'User Not Found with username ' + email;
                        return done(null, false, req.flash('message', 'User Not found.'));
                    }
                    // User exists but wrong password, log the error
                    if (!isValidPassword(user, password)){
                        //console.log('Invalid Password');
                        req.session.message = 'Invalid Password';
                        return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    //console.log('in passjs', req.session.message);
                    return done(null, user);
                }
            );

        })
    );

    passport.use('signup', new LocalStrategy({
            usernameField: 'email',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            User.findOne({ 'email' :  email }, function(err, user) {
                // In case of any error, return using the done method
                if (err){
                    //console.log('Error in SignUp: '+err);
                    return done(err);
                };
                // already exists
                if (user) {
                    //console.log('User already exists with email: ' + email);
                    req.session.message = 'User already exists with email: ' + email
                    return done(null, false, req.flash('message','User Already Exists'));
                } else {
                    // if there is no user with that email
                    // create the user
                    var newUser = new User();

                    // set the user's local credentials
                    newUser.username = req.body.username;
                    newUser.fullname = '';
                    newUser.city = '';
                    newUser.state = '';
                    newUser.password = createHash(password);
                    newUser.email = email;

                    // save the user
                    newUser.save(function(err) {
                        if (err){
                            //console.log('Error in Saving user: ' + err);
                            throw err;
                        }
                        //console.log('User Registration succesful');
                        req.session.message = 'User Registration succesful';
                        return done(null, newUser);
                    });

                }
            });
        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
};