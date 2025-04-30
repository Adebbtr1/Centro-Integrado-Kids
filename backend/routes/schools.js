const express = require('express');
const router = express.Router();
const School = require('../models/School');
const Student = require('../models/Student');
const authMiddleware = require('../middleware/auth');

// Create a new school
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, director, cnpj, address, contactEmail } = req.body;

    // Check if school with this CNPJ already exists
    let school = await School.findOne({ cnpj });
    if (school) {
      return res.status(400).json({ message: 'School with this CNPJ already exists' });
    }

    school = new School({
      name,
      director,
      cnpj,
      address,
      contactEmail
    });

    await school.save();
    res.status(201).json(school);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all schools with their students
router.get('/', authMiddleware, async (req, res) => {
  try {
    const schools = await School.find().populate('students');
    res.json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
