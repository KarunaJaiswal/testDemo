const mongoose = require('mongoose');
const config = require('./config.json')

const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

mongoose.connect(config.db_url, connectionOptions, function(result, err){
    if(err) console.log(err);
    console.log("db connected!")
})

module.exports = mongoose ;