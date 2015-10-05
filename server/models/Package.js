var mongoose = require('../helpers/db.js');

var packageSchema = new mongoose.Schema({
  repoName: String, 
  author: String,           // unique (based on github handle)
  defaultCommand: String,   // not necessarily unique (conflict resolution refers to authors)
  cloneUrl : String,
  description: String
});

var Package = mongoose.model('Package', packageSchema);

module.exports = Package;
