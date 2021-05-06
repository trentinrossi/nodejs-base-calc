const BaseCalcModel = require('./base-calc.model');

async function list(params) {
  // Formatar para SQLServer -> select * from tabela where from = o1803852
  return await BaseCalcModel.findOne(params).exec();
}
async function insert(payload) {}
async function update(payload) {}

module.exports = { list, insert, update };
