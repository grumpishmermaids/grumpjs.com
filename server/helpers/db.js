var mongoose = require('mongoose');
var config = require('../config');

module.exports = mongoose.connect(process.env.GRUMP_MONGO);
