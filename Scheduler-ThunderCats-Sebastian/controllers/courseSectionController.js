const express = require('express');
const router = express.Router();

var { CourseSection } = require('../models/CourseSection');

// =>localhost:5000/courseSections/
router.get('/', (req, res) => {
  CourseSection.find((err, docs) => {
    if (!err){
      console.log('ok? '+docs.length);
      res.send(docs);
      return docs;
    }
      else{
      console.log('Error in retriving course sections: ' + JSON.stringify(err, undefined, 2));
    }
});
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;
