const express = require("express");
const authLogic = require("../business-logic/auth-logic");
const cryptoHelper = require("../helpers/crypto-helper");
const UserModel = require("../models/user");
const CredentialsModel = require("../models/credentials");
const router = express.Router();


//Login user: 
//POST http://localhost:3001/api/auth/login
router.post("/login", async (request, response) => {
    try {
        // Data: 
        const credentials = new CredentialsModel(request.body);

        // Validation: 
        const errors = credentials.validatePost();
        if (errors) 
            return response.status(400).send(errors);

        // Logic: 
        const loggedInUser = await authLogic.loginAsync(credentials);
        if (!loggedInUser) 
            return response.status(401).send("Incorrect username or password.");
    
        // Success: 
        response.json(loggedInUser);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Register new user
// POST http://localhost:3001/api/auth/register
router.post("/register", async (request, response) => {
    try {
        // Data: 
        const user = new UserModel(request.body);

        // Validation: 
        const errors = user.validatePost();
        if (errors) 
            return response.status(400).send(errors);
        if (await authLogic.usernameAlreadyTakenAsync(user.username) === null) 
            return response.status(400).send(`Username "${user.username}" already taken.`);

        // Logic:
        const addedUser = await authLogic.registerAsync(user);

        // Success:
        response.status(201).json(addedUser);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});


module.exports = router;