var Article = require("../models/Article.js");

module.exports = function(app) {

app.get('/', function(req, res) {

       res.redirect('public/index.html');
});

app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/saved', function(req, res){

  var savedArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });

  savedArticle.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});

app.delete('/api/saved/:id', function(req, res){

  Article.find({'_id': req.params.id}).remove()
    .exec(function(err, doc) {
      res.send(doc);
  });

});

}