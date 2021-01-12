const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Saved_Jobs = new Schema({
  data: {
    type: Object,
  },
});

module.exports = mongoose.model("Saved_Jobs", Saved_Jobs);
