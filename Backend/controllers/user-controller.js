const express = require("express");
const userLogic = require("../business-logic/user-logic");
const cryptoHelper = require("../helpers/crypto-helper");
const UserModel = require("../models/user");
const CredentialsModel = require("../models/credentials");
const router = express.Router();


router.get('/roles', async(request,response)=>{
    try{
        const roles = await userLogic.getRolesAsync();
        return response.status(200).json(roles);
    }catch(err){
        response.status(500).send(err.message);
    }
})


module.exports = router;