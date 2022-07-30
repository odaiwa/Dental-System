const express = require("express");
const userLogic = require("../business-logic/user-logic");
const clinicLogic = require("../business-logic/clinic-logic");
const UserModel = require("../models/user");
const router = express.Router();

router.get('/docs', async(request, response)=>{
    try{
        const allUsers = await userLogic.getAllDoctorsAsync();
        console.log(allUsers);
        response.status(200).json(allUsers);
    }
    catch(err){
        response.status(500).send("error while getting data");
    }
});

router.get('/pats', async(request, response)=>{
    try{
        const allUsers = await userLogic.getAllPatientsAsync();
        response.status(200).json(allUsers);
    }
    catch(err){
        response.status(500).send("error while getting data");
    }
});

router.get('/nurs', async(request, response)=>{
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

router.get('/patients-doctors',async(request,response)=>{
    try{
        const all = await clinicLogic.getAllAsync();
        return response.status(200).json(all);
    }catch(err){
        return response.status(500).send(err);
    }
})
module.exports = router;

