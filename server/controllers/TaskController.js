import TaskModel from '../models/Task.js';
import TaskService from '../services/TaskService.js';


export const create = async(req, res) => {
    try {
        const task = await TaskService.create(req.body.text, req.body.status);
        res.json(task);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to create new task'
        });
    }

}

export const getAll = async(req, res) => {
    try {
        const tasks = await TaskService.getAll();
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to load tasks'
        });
    }
}

export const update = async(req, res) => {
    try {
        const updatedTask = await TaskService.update(req.body);
        return res.json(updatedTask);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to update tasks'
        });
    }
}

export const deleteTasks = async(req, res) => {
    try {
        const tasks = await TaskService.deleteTasks();
        return res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to delete tasks'
        });
    }
}

export const deleteTask = async(req, res) => {
    try {
        const task = await TaskService.deleteTask(req.params.id);
        return res.json(task);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to delete task'
        });
    }
}