var mongoose = require('mongoose');


module.exports = mongoose.connect(process.env.GRUMP_MONGO);
