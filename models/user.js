/* eslint-disable */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	name:String,
	email:String,
	password:String
});
var user = mongoose.model('user',userSchema);
module.exports = user;
/*
[
{
 'name':'xubin',
 'email':'xubinqz@gmail.com',
 'password':'paker1989'
}
,
{
 'name':'xinxiu',
 'email':'xinxiu.yu@gmail.com',
 'password':'xinxiu1989'
}
]
*/
