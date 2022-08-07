import Task from '../models/Task.js';
import TaskModel from '../models/Task.js';

class TaskService {
    async create(text, status) {
        const createdTask = await TaskModel.create({
            text: text,
            status: status
        })
        return createdTask;
    }

    async getAll() {
        const tasks = await TaskModel.find();
        return tasks;
    }

    async update(task) {
        if (!task._id) {
            throw new Error('ID not specified !');
        }
        const updatedTask = await TaskModel.findByIdAndUpdate(task._id, task, { new: true });
        return updatedTask;
    }

    async deleteTask(id) {
        if (!id) {
            const task = await TaskModel.remove({});
            return task;
        } else {
            const task = await TaskModel.findByIdAndDelete(id);
            return task;
        }
    }

}

export default new TaskService();