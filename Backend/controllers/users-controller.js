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

router.get('/users/pats', async(request, response)=>{
    try{
        const allUsers = await userLogic.getAllPatientsAsync();
        response.status(200).json(allUsers);
    }
    catch(err){
        response.status(500).send("error while getting data");
    }
});

router.get('/users/nurs', async(request, response)=>{
    try{
        const allUsers = await userLogic.getAllPatientsAsync();
        response.status(200).json(allUsers);
    }
    catch(err){
        response.status(500).send("error while getting data");
    }
});
router.get('/roles', async(request,response)=>{
    try{
        const roles = await userLogic.getRolesAsync();
        return response.status(200).json(roles);
    }catch(err){
        return response.status(500).send(err);
    }
})
module.exports = router;

