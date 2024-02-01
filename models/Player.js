const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the player"],
    },
    birthDate: {
      type: Date,
      required: [true, "Please enter the birth date of the player"],
    },
    img: {
      type: String,
      required: [true, "Please enter the badge of the player"],
    },
    teamId: { type: ObjectId, ref: "Team" },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
