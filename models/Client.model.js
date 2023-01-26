const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: String,
  isBlocked: {
    type: Boolean,
    default: false
  },
  borrowed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  }],
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;