const express = require('express');
const router = express.Router();
const Consultation = require('../models/Consultation');
const Student = require('../models/Student');
const authMiddleware = require('../middleware/auth');

// Schedule a consultation
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { student, date, time, reason } = req.body;

    // Verify student exists
    const studentExists = await Student.findById(student);
    if (!studentExists) {
      return res.status(400).json({ message: 'Student not found' });
    }

    const consultation = new Consultation({
      student,
      counselor: req.user.id,
      date,
      time,
      reason
    });

    await consultation.save();
    res.status(201).json(consultation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get consultations for a student
router.get('/student/:studentId', authMiddleware, async (req, res) => {
  try {
    const consultations = await Consultation.find({ student: req.params.studentId })
      .populate('student')
      .populate('counselor');
    res.json(consultations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update consultation status
router.patch('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    res.json(consultation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
