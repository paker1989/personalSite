var db = require('../db.js');
var ObjectId = require('mongodb').ObjectId;
var repositoryCollection = db.collection('repository');
var userCollection = db.collection('user');

console.log(userCollection);

var express = require('express');
var router = express.Router();

var getReps = function(req,res,next){
 repositoryCollection.find({childrenRepNb:20}).toArray(function(err,data){
  if(!err){
   res.send({
    msg:'success',
    data:data
   });
  }else{
   res.send(404);
  }
 });
};

var signIn = function(req,res,next){
 var reqBody = req.body;
 console.log(reqBody);
 userCollection.find({password:reqBody.password}).toArray(function(err,data){
  if(!err){
   res.send({
    msg:'success',
    authenticatedUsers:data
   });
  }else{
   res.send(404);
  }
 });
};

router.post('/getReps',getReps);
router.post('/signIn',signIn);

module.exports = router;