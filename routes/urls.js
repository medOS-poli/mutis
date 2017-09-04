"use strict";

const controller = require('../controllers/paths');
const express = require('express');
const router = express.Router();
const path = new controller();

router.get('/',path.registration);
router.post('/newComunity',path.registerComunity);
router.post('/newUser',path.registerUser);
router.post('/login',path.login);


/*API PATHS*/
router.get('/API/user/:adminID/:usrNick',path.userInfo);
router.get('/API/users',path.users);


module.exports = router;
