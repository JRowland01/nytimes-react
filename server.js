var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');

if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI);
} else{
    mongoose.connect("mongodb://localhost/nytreact");
}

var app = express();
var PORT = process.env.PORT || 4500;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

// Require the routes in the controller.js file
require("./controllers/controller.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
