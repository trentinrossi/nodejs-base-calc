const express = require('express');
const router = express.Router();
const baseCalcController = require('./base-calc.controller');

router.get('/', baseCalcController.list);
router.post('/', baseCalcController.create);
router.put('/', baseCalcController.update);

module.exports = router;
