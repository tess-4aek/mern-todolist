import TaskModel from '../models/Task.js';

class TaskService {
    create(text, status) {
        return TaskModel.create({
            text: text,
            status: status
        })
    }

    getAll() {
        return TaskModel.find();
    }

    update(task) {
        if (!task._id) {
            throw new Error('ID not specified !');
        }

        return TaskModel.findByIdAndUpdate(task._id, task, { new: true });
    }

    deleteTasks() {
        return TaskModel.remove({});
    }

    deleteTask(id) {
        if (!id) {
            throw new Error('ID not specified !');
        }

        return TaskModel.deleteOne({ _id: id });
    }
}

export default new TaskService();