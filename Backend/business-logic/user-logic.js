const dal = require("../data-access-layer/dal");
const cryptoHelper = require("../helpers/crypto-helper");
const sqlCommands = require("../helpers/statics");

//Get all users from DB
async function getAllUsersAsync() {
    const sql =  sqlCommands.GET_ALL_USERS;
    const users = await dal.executeAsync(sql);
    return users;
}

async function getRolesAsync(){
    const sql = 'SELECT * from role';
    const roles = await dal.executeAsync(sql);
    return roles;
}

//get user by his uuid
async function getOneUserByUuidAsync(username) {
    const sql = sqlCommands.GET_USER_BY_USERNAME;
    const user = await dal.executeAsync(sql, [ username ]);
    if (user.length === 0) return null; 
    return user[0];
}

//update user details
async function updateFullUserAsync(user) {
    user.password = cryptoHelper.hash(user.password);
    const sql = `UPDATE users SET uuid = ?', firstName = ? , lastName = ?', userName = ?, users.password = ?', isAdmin = ?
                WHERE uuid = ?`;            
    const info = await dal.executeAsync(sql ,[user.uuid, user.firstName, user.lastName, user.userName, user.password, user.isAdmin, user.uuid]);

    // Delete password so it won't returned to the frontend:
    delete user.password;
    return info.affectedRows === 0 ? null : user;
}

//delete user from DB
async function deleteUserAsync(username) {
    const sql = sqlCommands.DELETE_USER_BY_USERNAME;
    await dal.executeAsync(sql,[ username ]);
}

module.exports = {
    getAllUsersAsync,
    getOneUserByUuidAsync,
    deleteUserAsync,
    updateFullUserAsync,
    getRolesAsync
};