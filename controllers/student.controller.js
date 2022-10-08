
const {Student} = require('../models/student.models');

const getStudent = async(req, res) =>{
    try {
        const students = await Student.find();
        return res.status(200).send(students);
    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }
}

const createStudent = async(req, res) =>{
    const student = new Student(req.body)
    try {
        const result = await student.save();
        return res.status(201).send(result);
    } catch (err) {
        return res.status(500).send({ error: err })
    }
}





module.exports = {
    getStudent,
    createStudent
}


