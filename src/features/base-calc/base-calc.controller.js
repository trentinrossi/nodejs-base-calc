const BaseCalcModel = require('./base-calc.model');
const baseCalcService = require('./base-calc.service');

async function list(req, res) {
  // Formatar os parametros para mandar para o serviço
  const result = await baseCalcService.list();
  res.send(result);
}

async function create(req, res) {
  try {
    await baseCalcService.insert(req.body);
    return res.status(201).json('Success!');
  } catch (err) {
    return res.status(400).json('Error saving to database');
  }
}

async function update(req, res) {
  try {
    await baseCalcService.update(req.body);
    return res.status(201).json('Success!');
  } catch (err) {
    return res.status(400).json('Error saving to database');
  }
}

module.exports = { list, create, update };
