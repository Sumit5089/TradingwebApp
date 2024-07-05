// Initiate the server and listen on port 3000
require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');
const { PositionModel} = require('./models/PositionModel');
const { HoldingModel} = require('./models/HoldingModel');
const bodyParser = require('body-parser');
const cors = require('cors');

 const PORT = process.env.PORT || 3002;
 const URL = process.env.MONGO_URL;
 
 const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allpositions = await PositionModel.find({});
    res.json(allpositions);
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    mongoose.connect(URL);
    console.log('Connected to MongoDB');
});