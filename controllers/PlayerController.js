const Player = require("../models/Player");
require("dotenv").config();

const PlayerController = {
  async create(req, res) {
    try {
      const player = await Player.create(req.body);
      res.status(201).send({ message: "Player created successfully", player });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Unexpected error creating the player" });
    }
  },
  async getAll(req, res) {
    try {
      const players = await Player.find();
      res.send(players);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Unexpected error looking for the players" });
    }
  },
  async getByName(req, res) {
    try {
      const { name } = req.params;
      const player = await Player.findOne({ name });
      if (!player) {
        return res.status(404).send({ message: "Player not found" });
      }
      res.send(player);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Unexpected error looking for the player" });
    }
  },
};

module.exports = PlayerController;
