
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , mongoose = require('mongoose')
  , bodyParser = require('body-parser')
  , path = require('path');
var meetupsController=require('./server/controllers/meetups-controller');
var app = express();

mongoose.connect('mongodb://localhost:27017/test');

app.use(bodyParser());
app.get('/',function(req,res){
	
	res.sendfile('./views/index.html');
});
app.use('/js',express.static(__dirname+'/js'));
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);
app.listen(3009,function(){
	
	console.log("hi i m here");
})
