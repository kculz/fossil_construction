const router = require("express").Router();
const requestController = require("../controllers/requestController");
const {authMiddleware} = require('../middleware')


router.post("/send", authMiddleware, requestController.sendEmail);

module.exports = router;