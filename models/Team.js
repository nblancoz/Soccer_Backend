const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the team"],
    },
    league: {
      type: String,
      required: [true, "Please enter the league of the team"],
    },
    country: {
      type: String,
      required: [true, "Please enter the country of the team"],
    },
    city: {
      type: String,
      required: [true, "Please enter the city of the team"],
    },
    foundationDate: {
      type: Number,
      required: [true, "Please enter the foundation date"],
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
