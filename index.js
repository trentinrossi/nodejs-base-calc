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

// Ajustar para colocar um array de ranges - mongoose
// Fazer ele retornar um 201 - express
app.post('/base-calc', async (req, res) => {
  console.log(req.body);
  await BaseCalcModel.create(req.body);
  res.send('Gravação dos dados dentro do MongoDB');
});

// Validar qual o código de resposta mais apropriado [200, 201, etc]
app.put('/base-calc', async (req, res) => {
  console.log(req.body);
  await BaseCalcModel.findOneAndUpdate({},req.body);
  res.send('Atualização dos dados dentro do MongoDB');
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
