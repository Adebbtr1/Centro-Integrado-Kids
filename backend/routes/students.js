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

// Get students and count for a specific school
router.get('/school/:schoolId', authMiddleware, async (req, res) => {
  try {
    // Buscar a escola pelo ID e popular os alunos
    const school = await School.findById(req.params.schoolId).populate('students', 'name');

    // Verificar se a escola existe
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    // Contar o número de alunos
    const studentCount = school.students.length;

    // Responder com a escola, quantidade de alunos e lista de alunos
    res.json({
      schoolName: school.name,
      studentCount: studentCount,
      students: school.students // Lista dos alunos com os nomes
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
