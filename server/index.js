import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { taskValidation } from './validations/task.js';
import handleValidationErrors from './middlewares/handleValidationErrors.js';
import { validationResult } from 'express-validator';
import TaskModel from './models/Task.js';


dotenv.config();
mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('DB has been connected'))
    .catch((error) => console.log(`DB have an ERROR: ${error}`))

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());


app.post('/', taskValidation, handleValidationErrors, async(req, res) => {
    try {
        const doc = TaskModel({
            text: req.body.text,
            status: req.body.status
        });

        const task = await doc.save();

        res.json(task);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to create new task'
        });
    }

});

app.get('/', async(req, res) => {
    try {
        const task = await TaskModel.find();
        res.json(task);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Failed to load tasks'
        });
    }
})


const start = async() => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();