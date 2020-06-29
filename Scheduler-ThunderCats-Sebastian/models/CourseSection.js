var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// var CourseSection = mongoose.model('CourseSection', {
//   CRN: { type: Number },
//     CRSENO: { type: String },
//     TITLE: { type: String },
//     SECTNO: { type: Number },
//     DAYS: { type: String },
//     START: { type: Number },
//     END: { type: Number },
//     ROOM: { type: String },
//     PER: { type: Number },
//     CRDTS: { type: Number },
//     LASTNAME: { type: String },
//     FIRSTNAME: { type: String }
// });

var CourseSchema = new Schema({
  CRN: { type: Number },
  CRSENO: { type: String },
  TITLE: { type: String },
  SECTNO: { type: Number },
  DAYS: { type: String },
  START: { type: Number },
  END: { type: Number },
  ROOM: { type: String },
  PER: { type: Number },
  CRDTS: { type: Number },
  LASTNAME: { type: String },
  FIRSTNAME: { type: String }

});

var CourseSection = mongoose.model('spring2019', CourseSchema);

module.exports = {
  CourseSection
};
