const studentRouter = require('express').Router();

const {
    getStudent,
    createStudent
} = require('../controllers/student.controller');

studentRouter.route('/')
.get(getStudent)
.post(createStudent)

module.exports = studentRouter;

