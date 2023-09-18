const router = require("express").Router();
const requestController = require("../controllers/requestController");

router.post("/send", requestController.sendEmail);

module.exports = router;