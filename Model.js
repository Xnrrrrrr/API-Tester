const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const Name = mongoose.model('Name', NameSchema);

module.exports = Name;