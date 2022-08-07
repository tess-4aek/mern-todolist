import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { taskValidation } from './validations/task.js';
import handleValidationErrors from './middlewares/handleValidationErrors.js';
import * as TaskController from './controllers/TaskController.js';


dotenv.config();
mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('DB has been connected'))
    .catch((error) => console.log(`DB have an ERROR: ${error}`))

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());
app.use(cors());




app.post('/', taskValidation, handleValidationErrors, TaskController.create);
app.get('/', TaskController.getAll);
app.put('/', taskValidation, handleValidationErrors, TaskController.update);
app.delete('/', TaskController.deleteTask);

const start = async() => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();