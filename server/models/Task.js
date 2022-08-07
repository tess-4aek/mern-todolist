import mongoose from 'mongoose';

const TaskModel = new mongoose.Schema({
    "text": { type: String, required: true },
    "status": { type: Boolean, required: true }
}, {
    timestamps: true
});

export default mongoose.model('Task', TaskModel);