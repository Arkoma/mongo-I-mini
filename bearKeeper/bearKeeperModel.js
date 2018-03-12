const mongoose = require('mongoose');

const BearKeeperSchema = mongoose.Schema({
  species: {
    type: String,
    required: true
  },
  latinName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    required: true
  }
})

const BearKeeperModel = mongoose.model('BearKeeper', BearKeeperSchema);

module.exports = BearKeeperModel;