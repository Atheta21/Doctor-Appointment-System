const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
  userId: {
    type: String,
    required: true,
  },

  doctorId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "doctors",
  required: true,
},

  date: {
    type: String,
  },

  time: {
    type: String,
  },

  status: {
    type: String,
    default: "pending",
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("appointments", appointmentSchema);