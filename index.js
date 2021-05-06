require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const baseCalcRoutes = require('./src/features/base-calc/base-calc.routes');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use('/base-calc', baseCalcRoutes);

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
