const dal = require("../data-access-layer/dal");
const cryptoHelper = require("../helpers/crypto-helper");
const sqlCommands = require("../helpers/statics");

async function getDoctorPatientListAsync(){
    const sql =  sqlCommands.GET_PATIENTS_DOCTORS;
    const users = await dal.executeAsync(sql);
    return users;
}

async function getAllAsync(){
    const sql = sqlCommands.GET_ALL_APPOINTMENTS;
    const apps = await dal.executeAsync(sql);
    return apps;
}

module.exports={
    getAllAsync,
    getDoctorPatientListAsync
}