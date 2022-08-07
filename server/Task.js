const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    "text": { type: String, required: true },
    "status": { type: Boolean, required: true }
});

export default mongoose.model('Task', Task);