const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CarSchema   = new Schema({
    ano: Number,
    cor: String,
    marca: String,
    modelo: String,
});

module.exports = mongoose.model('Car', CarSchema);