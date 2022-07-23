//Authentication-logic
const dal = require("../data-access-layer/dal");
const uuid = require("uuid");
const cryptoHelper = require("../helpers/crypto-helper");
const UserModel = require("../models/user");
const jwtHelper = require("../helpers/jwt-helper");
const sqlCommands = require("../helpers/statics");

//check if username already exists in DB
async function usernameAlreadyTakenAsync(username) {
    const sql = sqlCommands.USER_ALREADY_EXIST;
    const result = await dal.executeAsync(sql, [username]);
    if (result.length > 0) return null;
}


//Register new user to system
async function registerAsync(user) {
    user.password = cryptoHelper.hash(user.password);
    const sql = sqlCommands.INSERT_INTO_USERS;
    const values = [ user.username, user.password, user.firstName, user.lastName, user.email , user.dateOfBirth, user.role ];
    const info = await dal.executeAsync(sql, values);
    delete user.password;
    //user.isAdmin = 0;
    user.token = jwtHelper.getNewToken(user);
    return user;
}

//Login to system
async function loginAsync(userToLogIn) {
    userToLogIn.password = cryptoHelper.hash(userToLogIn.password);
    const sql = sqlCommands.LOGIN_USER;
    const values = [userToLogIn.username, userToLogIn.password];
    const users = await dal.executeAsync(sql, values);
    if (users.length === 0) return null;
    const user = users[0];
    delete user.password;
    user.token = jwtHelper.getNewToken(user);
    return user;
}


module.exports = {
    usernameAlreadyTakenAsync,
    registerAsync,
    loginAsync
};