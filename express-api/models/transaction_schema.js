const mongoose = require("./../node_modules/mongoose");

//schema for transaction for later DB
const transaction_schema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    default: 'Default',
  },
  note: {
    type: String,
    required: false,
    unique: false,
  },
  buy_from: {
    type: String,
    //required: true,
    unique: false,
  },
  time: {
    type: Date,
    //required: true,
    unique: false,
  },
  amount: {
    type: Number,
    //required: true,
    unique: false,
  },
  createdAt: {
    type: Date,
  },
});

const tran_model = mongoose.model("Transactions", transaction_schema);

module.exports = tran_model;
