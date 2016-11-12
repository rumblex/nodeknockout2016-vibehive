
//load module
var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

//HTTPS TO HTTP
app.use(function (req, res, next){
  //if over http
  if(req.headers['x-forwarded-proto'] ===  'http') {
    res.redirect('http://'+req.hostname +req.url);
  } else {
    next();
  }
});

//show app folder to serve
app.use(express.static('public')); // specifies a a folder name to expose

//start the server
app.listen(PORT, function(){ // takes the port you are serving to and a function
  console.log('Express Server is up on port ' + PORT);//log top console
});
