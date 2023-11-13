const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  componentName: { type: String, required: true },
  componentCode: { type: String, required: true },
  generatedTests: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
