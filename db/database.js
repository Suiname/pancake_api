var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/pancakes';
mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('Cookin\' up some marvelous shit to get your mouth waterin\'');
});

mongoose.connection.on('error', function(err){
  console.log(err);
});
mongoose.connection.on('disconnected', function(){
  console.log('The meal isn\'t over when I\'m full, the meal is over when I hate myself.');
});
