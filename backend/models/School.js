const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  cnpj: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('School', SchoolSchema);
