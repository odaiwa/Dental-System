const express = require("express");
const userLogic = require("../business-logic/user-logic");
const UserModel = require("../models/user");
const router = express.Router();


router.get('/users/docs', async(request, response)=>{
    try{
        const allUsers = await userLogic.getAllUsersAsync();
        response.status(200).json(allUsers);
    }
    catch(err){
        response.status(500).send("error while getting data");
    }
});


module.exports = router;