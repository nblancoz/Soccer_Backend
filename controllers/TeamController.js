const { response } = require("express");
const Team = require("../models/Team");
require("dotenv").config();

const TeamController = {
  async create(req, res) {
    try {
      const team = await Team.create(req.body);
      res.status(201).send({ message: "Team created successfully", team });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Unexpected error creating the team" });
    }
  },
  async getAll(req, res) {
    try {
      const teams = await Team.find();
      res.send(teams);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Unexpected error looking for the teams" });
    }
  },
  async getByName(req, res) {
    try {
      const { name } = req.params;
      const team = await Team.findOne({ name });
      if (!team) {
        return res.status(404).send({ message: "Team not found" });
      }
      res.send(team);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Unexpected error looking for the team" });
    }
  },
};

module.exports = TeamController;
