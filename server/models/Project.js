const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema
const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    },
    github: String,
    url: String,
    img: String,
    tasks: {
        type: [String],
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    }
});

// Create model with schema
const Project = mongoose.model('Project', projectSchema);

module.exports = {
    Project
}

