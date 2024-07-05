// Initiate the server and listen on port 3000
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

 const PORT = process.env.PORT || 3000;
 const URL = process.env.MONGO_URL;
 
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    mongoose.connect(URL);
    console.log('Connected to MongoDB');
});