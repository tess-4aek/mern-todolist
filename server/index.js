require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('DB has been connected'))
    .catch((error) => console.log(`DB have an ERROR: ${error}`))

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());



const start = async() => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();