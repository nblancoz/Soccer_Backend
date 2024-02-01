const express = require("express");
const router = express.Router();

const PlayerController = require("../controllers/PlayerController");

router.post("/createPlayers", PlayerController.create);
router.get("/getAll", PlayerController.getAll);
router.get("/getByName", PlayerController.getByName);

module.exports = router;
