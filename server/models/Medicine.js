const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  condition: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  dosage: { type: String, required: true },
  videoUrl: { type: String },
});

module.exports = mongoose.model('Medicine', MedicineSchema);