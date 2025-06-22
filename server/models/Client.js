const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  contactNumber: String,
  status: { type: String, enum: ['Active', 'Inactive'] }
});

module.exports = mongoose.model('Client', clientSchema);
