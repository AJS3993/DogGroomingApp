const mongoose = require('mongoose')
const Schema = mongoose.Schema

var dogSchema = new Schema(
  {
    name: { type: String},
    age: { type: String},
    weight: { type: String},
    color: {type: string},
    details: {type: string}
  }
);


module.exports = mongoose.model('Dog', dogSchema);