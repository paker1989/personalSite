var dburl,db;
var mongoose = require('mongoose');

dburl = "mongodb://127.0.0.1:27017/final-test-db";

mongoose.connect(
dburl,
{
 db:{
  native_parser:true
 },
 server:{
  auto_reconnect:true,
  poolSize:5
 }
},
function(res,err){
	if(err){
	 console.log('error connecting '+dburl+' :'+err);
	}else{
	 return 'connected successfully to '+dburl;
	}
});

db = mongoose.connection;

db.on('error',console.error.bind(console,'mongoose connection error:'));

db.once('open',function(){
 return console.log('mongoose open success');
});

module.exports = db;



