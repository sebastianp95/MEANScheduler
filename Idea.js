var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
var IdeaSchema = new Schema({
tittle:{

  type: String,
  required: true
},
details:{
  type: String,
  required: true
},
date: {
  type: Date,
  default: Date.now
}
});


mongoose.model('ideas', IdeaSchema);
