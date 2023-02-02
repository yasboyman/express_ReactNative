const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  newUser: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Members", MembersSchema);
