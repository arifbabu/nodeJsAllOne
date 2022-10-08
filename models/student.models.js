const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

module.exports.Student = model('Student', Schema({
    fname : {type : String},
    lname  : {type : String},
    passsword : {type : String},
}));



