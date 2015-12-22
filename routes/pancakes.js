var express = require('express');
var router = express.Router();
var model = require('../models/Pancake');

function errorMessage(err){
  return {
    message: err,
    status: 500,
    note: "This message generated due to user error"
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, pancakes) {
    if (err){
      res.json(errorMessage(err));
    } else {
      res.json(pancakes);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, pancake) {
    if (err){
      res.json(errorMessage(err));
    } else {
      res.json(pancake);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function (err, pancake) {
    if (err){
      res.json(errorMessage(err));
    } else {
      res.json({"message": "Your pancake recipe has been added"});
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, pancake){
    if (err){
      res.json(errorMessage(err));
    } else {
      res.json(pancake);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, pancake){
    if (err){
      res.json(errorMessage(err));
    } else {
      res.json(pancake);
    }
  });
});

router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, function (err,pancake){
    if (err){
      res.json(errorMessage(err));
    } else {
      res.json({'message': 'Your pancake recipe has been removed'});
    }
  })
});

module.exports = router;
