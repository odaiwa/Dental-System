const dal = require("../data-access-layer/dal");
const sqlCommands = require("../helpers/statics");

async function addNewRoomAsync(room){
    console.log("addNewRoomAsync : "+ room)
    const newRoom = await dal.executeAsync(sqlCommands.ADD_NEW_ROOM, [ room.roomName ]);
    return newRoom;
}

async function roomNameTakenAsync(room){
    const sql = `SELECT * FROM rooms WHERE roomName = '${room.roomName}'`;
    const result = await dal.executeAsync(sql);
    if (result.length > 0) return null;

}

async function getAllRoomsAsync(){
    const sql = 'SELECT * FROM rooms';
    const result = await dal.executeAsync(sql);
    return result;
}

module.exports={
    addNewRoomAsync,
    roomNameTakenAsync,
    getAllRoomsAsync
}