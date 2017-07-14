const express = require('express');
const app = express();
const Model = require('./models/Post');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/post', (req, res) => {
  new Model.Post()
		.fetchAll()
		.then(post => {
      res.json(post)
    })
		.catch(function (error) {
			 console.log(error);
			 res.send('An error occured');
		});
});

app.get('/api/post/:slug', (req, res) => {
  new Model.Post({
    'slug': req.params.slug
  })
		.fetch()
		.then(post => {
      res.json(post)
    })
		.catch(function (error) {
			 console.log(error);
			 res.send('An error occured');
		});
});

app.listen(8080, function() {
  console.log('Listening on 8080');
});

module.exports = app;
