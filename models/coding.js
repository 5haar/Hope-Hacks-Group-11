const mongoose = require('mongoose');

const codingSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
})

module.exports = mongoose.model('Coding', codingSchema);