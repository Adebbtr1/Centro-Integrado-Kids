const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const School = require('../models/School');
const authMiddleware = require('../middleware/auth');

// Create a new student
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, birthDate, guardianName, school } = req.body;

    // Verify school exists
    const schoolExists = await School.findById(school);
    if (!schoolExists) {
      return res.status(400).json({ message: 'School not found' });
    }

    const student = new Student({
      name,
      birthDate,
      guardianName,
      school,
      user: req.user.id
    });

    await student.save();

    // Add student to school's students array
    schoolExists.students.push(student._id);
    await schoolExists.save();

    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get students for a specific school
router.get('/school/:schoolId', authMiddleware, async (req, res) => {
  try {
    const students = await Student.find({ school: req.params.schoolId });
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
