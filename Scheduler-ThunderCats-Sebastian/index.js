const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./server.js');
var courseSectionCtrl = require('./controllers/courseSectionController.js')

var app = express();

var port = process.env.PORT || 5000;


app.use(bodyParser.json());

app.listen(port, () => console.log('Server on port ' + port));


app.use('/courseSections', courseSectionCtrl);
