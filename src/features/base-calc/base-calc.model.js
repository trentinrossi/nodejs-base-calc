const mongoose = require('mongoose');
const { Schema } = mongoose;

const baseCalcSchema = new Schema({
  irpf: {
    range: Number,
    taxRate: String,
    deduction: String,
    dependent: String,
  },
  inss: {
    taxRate: String,
    value: String,
  },
});

module.exports = mongoose.model('base-calc-index', baseCalcSchema);
