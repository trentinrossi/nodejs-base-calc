const BaseCalcModel = require('./base-calc.model');
const baseCalcService = require('./base-calc.service');

async function list(req, res) {
  // Formatar os parametros para mandar para o serviço
  const result = baseCalcService.list();
  res.send(result);
}

async function create(req, res) {
  try {
    await BaseCalcModel.create(req.body);
    return res.status(201).json('Success!');
  } catch (err) {
    return res.status(400).json('Error saving to database');
  }
}

async function update(req, res) {
  // console.log(req.body);
  try {
    await BaseCalcModel.findOneAndUpdate({}, req.body);
    return res.status(201).json('Success!');
  } catch (err) {
    return res.status(400).json('Error saving to database');
  }
}

module.exports = { list, create, update };
