const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

const FormData = require("./router/FormData");

// Use routes
app.use("/", FormData);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Gold_ball', {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
