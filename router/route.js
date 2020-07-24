const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get("/user", controller.getUser);
router.post("/add-user", controller.addUser);

module.exports = router;
