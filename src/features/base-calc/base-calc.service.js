const repository = require('./base-calc.repository');

async function list(params) {
  // Formatar para SQLServer -> select * from tabela where from = o1803852

  const conditions = {};
  const paging = {};

  return await repository.find(conditions, paging);
}
async function insert(payload) {
  return await repository.insert(payload);
}
async function update(payload) {
  return await repository.update(payload);
}

module.exports = { list, insert, update };
