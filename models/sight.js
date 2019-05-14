var mongoose = require('mongoose');

var sightSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
    }
  ]
});

var Sight = mongoose.model('Sight', sightSchema);

module.exports = Sight;