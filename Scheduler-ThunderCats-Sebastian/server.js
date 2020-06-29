const mongoose = require('mongoose');
const course = require('./routes/api/course');



var db = require('./config/keys').mongoURI;

//connection
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

//connection message
mongoose.connection.once('open', (err,res) => {

  if(err){
    console.log('Error');
  }
  console.log('Connection madeeeeeeeeeee');

  // mongoose.connection.db.collection('spring2019' , (err, res) => {
  //   if(err){
  //     return console.err('Erroor '+ err);
  //   }
  //   console.log('Connection spring 2019 madeeeeeeeeeee');
  //   // console.log(res.find({}));
  //   res.find().each(function (err, doc) {
  //     if(err)
  //       return console.err('Erroor '+ err);

  //         // console.log(doc);
  //       });
  // });


}).on('error', (err) => {
  console.log('Error' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;


/*
Express server( name of my app=sd1AngularSillyDemo in dist folder )

*/
// app.use(express.static(__dirname + '/dist/sd1AngularSillyDemo'));

// app.get('/*', (req, res) =>
//   res.sendFile(path.join(__dirname)));


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// var server = http.createServer(app);

// server.listen(port, () => console.log('Runing'));



//  app.engine('handlebars', exphbs({
//      defaultLayout: 'main'
//  }));
//  app.set('view engine', 'handlebars');

// app.use(function(req, res, next){

// req.name = "Hola Juanchito";
// next();
// });

// app.get('/', (req, res) => {

//   res.render('src/main');
//     });

//     app.get('/about', (req, res)=>{
//     res.render('index');
//     });

// app.post("/api/SaveUser", function (req, res) {
  //     var mod = new model(req.body);
  //     if (req.body.mode == "Save") {
  //         mod.save(function (err, data) {
  //             if (err) {
  //                 res.send(err);
  //             }
  //             else {
  //                 res.send({ data: "Record has been inserted..!!" });
  //             }

  //         });
  //     }
  //     else {

  //         model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address },
  //             function (err, data) {
  //                 if (err) {
  //                     res.send(err);

  //                 }
  //                 else {
  //                     res.send({ data: "Record has been Update..!" });
  //                 }
  //             });
  //     }
  // })
