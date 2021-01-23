const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebSchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String
    },
    {
        timestamp: true
    }
);

module.exports = model('Celebrity', celebSchema)