//On Server directory -> node server.js

const express = require('express');
const router = express.Router();

const mongo = require('mongodb');
var ObjectID = require('mongodb').ObjectID;
var dbo;   
const uri = 'mongodb+srv://dbUser:dbUserPassword@cluster0.ezk2m.mongodb.net/HapoalimAppDB?retryWrites=true&w=majority';
         
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(uri,{ useUnifiedTopology: true},function(err,db) {
if (err) throw err;
   
dbo = db.db("HapoalimDB");    

});    

//http://localhost:3000/general/customers
router.get('/customers/',(req,res,next) => {    
        dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result);
            res.status(200).json({
                customers: result
             });         
    });    
});    
  
//id 571fd15840c4ed0d240d7d6c
router.post("/customers/update/",(req,res,next) => {
    
    //Field type update
    dbo.collection("customers").find({_v: {$exists:true}}).forEach( function(x) {
    dbo.collection("customers").update({_id: x._id}, {$set: {_v: x._v.toString()}});
    });

    var id = req.body._id;
    if (id == undefined)
      return res.status(500).json({Description : "Request id undefined !"});

    console.log('request id:' + req.body._id);
    var t = req.body._t;
    var v = req.body._v; 

    var where = { _id: ObjectID(id) };
    var values = { $set: {_t: t, _v: v } };
    dbo.collection("customers").update(where, values, function(err, res) {
   
     if (err) throw err;
     });
    
     return res.status(200).json({
        description : "collection update successed !"
     });    
});

//http://localhost:3000/general/customers/60bb2521473335024d4db03d
router.get('/customers/:id',(req,res,next) => {  

    const id = req.params.id;

    dbo.collection("customers").findOne({"_id" : ObjectID(id)}, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.status(200).json({
            _id : result._id,
            v : result._v,
            t: result._t
        });        
});    
  
});

//http://localhost:3000/general/customers/balance
router.get('/balances/',(req,res,next) => {    
    dbo.collection("balances").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log('balances:' + result);
    res.status(200).json({
       balances: result
    });        
  });    
});


//http://localhost:3000/general/customers/deposits
router.get('/deposits/',(req,res,next) => {    
    dbo.collection("deposits").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log('deposits:' + result);           
    res.status(200).json({
       deposits: result
    });        
  });    
});


//http://localhost:3000/general/customers/withdrawls
router.get('/withdrawls/',(req,res,next) => {    
    dbo.collection("withdrawls").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);        
    res.status(200).json({
       withdrawls: result
    });        
  });    
});


//http://localhost:3000/general/customers/euro
router.get('/euro/',(req,res,next) => {    
    dbo.collection("euro").find({}).toArray(function(err, result) {
    if (err) throw err;
       console.log(result);        
       res.status(200).json({
       euro: result
    });        
  });    
});

module.exports = router;