'use strict';
let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let Artist = require('./models/artist');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/museumrApp');
// begin routes

app.get('/artists', (req, res) => {
  console.log('hit /artists');
  Artist.find({}, function(err, result) {
    console.log(result)
    res.send(result);
  });
});

app.post('/create-artist', (req, res, next) => {
    let newArtist = new Artist(req.body);
    newArtist.save((err) => {
      if (err) throw err;
      console.log('New artist created!');
    });
    res.send(newArtist);
  });
// get ID
app.get('/artists/:name', (req, res) => {

    Artist.find({name: req.params.name}, function(err, result) {
      console.log(result)
      res.send(result);
    })
});
//
// app.put
//
// app.delete


let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('SERVER IS UP BROS!!!', host, port);
});
