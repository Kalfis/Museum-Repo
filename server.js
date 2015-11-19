'use strict';
let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');

let app = express();



let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('SERVER IS UP BROS!!!', host, port);
});
