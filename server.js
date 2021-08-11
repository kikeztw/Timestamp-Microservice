// server.js
// where your node app starts

// init project
const utils = require('./utils');
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api', function(req, res){
  res.json({
    unix: utils.getCurrentDate().unix,
    utc: utils.getCurrentDate().utc,
  })
})

app.get('/api/:date', function(req, res){
  const { date } = req.params;
  const _date = +date ? +date : date;

  if(utils.isValidDate(_date)){
    console.log('is Valid')
    const result = {
      unix: '',
      utc: '',
    }

    if(utils.isUnixFormat(_date)){
      result.unix = _date;
    }else{
      result.unix = utils.formatDateToUnix(_date);
    }
    result.utc = utils.formatDate(_date);
    res.json(result);
  }else{
    res.json({
      error : "Invalid Date",
    });
  }
});

console.log(process.env.PORT)

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
