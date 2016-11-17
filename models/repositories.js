/* eslint-disable */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var repositorySchema = new Schema({
	repname:String,
	author:String,
	childrenRepNb:Number
});
var repository = mongoose.model('repository',repositorySchema);
module.exports = repository;
/*
[
{
 'repname':'front-end',
 'author':'xu bin',
 'childrenRepNb':20
}
,
{
 'repname':'back-end',
 'author':'bxu1',
 'childrenRepNb':12
}
]
*/
