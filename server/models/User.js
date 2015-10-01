var mongoose = require('../helpers/db.js');

//sets expiry time on data in mongoose
var ttl = require('mongoose-ttl');

var userSchema = new mongoose.Schema({
  token : String,
  name  : String,
  login : String,
  email : String,
  createdAt: { 
    type: Date,  
    default: Date.now
  }

});

//this sets the user token to expire (be deleted from db after 1h -- note that do to it being like settimeout, its a bit random when it actually happens)
userSchema.plugin(ttl, {ttl:'1h'});

var User = mongoose.model('User', userSchema);

module.exports = User;