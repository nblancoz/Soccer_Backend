const express = require("express");
const router = express.Router();

const TeamController = require("../controllers/TeamController");

router.post("/createTeams", TeamController.create);
router.get("/getAll", TeamController.getAll);
router.get("/getByName/:name", TeamController.getByName);

module.exports = router;
