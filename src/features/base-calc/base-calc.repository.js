const BaseCalcModel = require('./base-calc.model');

async function find(conditions, paging) {
  return await BaseCalcModel.find(conditions, paging).exec();
}

async function insert(body) {
  return await BaseCalcModel.create(body);
}

async function update(body) {
  return await BaseCalcModel.findOneAndUpdate({}, body);
}

module.exports = { find, insert, update };
