require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const BaseCalcModel = require('./src/features/base-calc/base-calc.model');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());

app.get('/base-calc', async (req, res) => {
  const baseCalc = await BaseCalcModel.findOne().exec();  
  res.send(baseCalc);
});

// 201 - express
app.post('/base-calc', async (req, res) => {

  try {
    await BaseCalcModel.create(req.body);
    return res.status(201).json('Success!');
  } catch (err) {
    return res.status(400).json('Error saving to database')
  }
});

// status 201
app.put('/base-calc', async (req, res) => {
  // console.log(req.body);
  try {
    await BaseCalcModel.findOneAndUpdate({},req.body);
    return res.status(201).json('Success!')
 
  } catch(err) {
    return res.status(400).json('Error saving to database')
  }
});

app.get('/healthcheck', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
});
