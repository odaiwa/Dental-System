const express = require("express");
const roomLogic = require("../business-logic/rooms-logic");
const clinicLogic = require("../business-logic/clinic-logic");
const RoomModel = require("../models/rooms");
const router = express.Router();


router.post('/add-room', async(request,response)=>{
    try{
        console.log(request.body)
        const room = new RoomModel(request.body);
        const errors = room.validatePost();
        console.log(room, errors)
        if (errors) 
            return response.status(400).send(errors);

        if (await roomLogic.roomNameTakenAsync(room) === null) 
            return response.status(400).send(`room name "${room.roomName}" already taken.`);
        const addedRoom = roomLogic.addNewRoomAsync(room);
        // Success:
        response.status(201).json(addedRoom);
    }catch(err)
    {
        console.log("Rooms Controller - Errors : ",err )
        response.status(500).send(err);
    }
})

router.get('/',async(request,response)=>{
    try{
        const allRooms = await roomLogic.getAllRoomsAsync();
        response.status(200).json(allRooms);
    }catch(err)
    {
        response.status(500).send(err.message);
    }
})


module.exports = router;