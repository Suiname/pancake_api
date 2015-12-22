var app = app || {};       // definitions (blueprints) here
var active = active || {}; // instantiated objects go here


app.Model = Backbone.Model.extend({
  // idAttribute: '_id',
  // http://stackoverflow.com/questions/8007218/backbone-using-a-different-field-name-for-id
  initialize: function() {
    console.log('A model was dynamically generated');
  }
});

// mongodb support
// override the model's idAttribute to '_id'
Backbone.Model.idAttribute = "_id";

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  initialize: function() {
    var self = this;
    this.fetch();
    console.log('The collection of pancakes is on the loose');
    this.on('change', function() {
      console.log("our collection changed");
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.on('sync', function() {
      console.log("our collection synced with the API");
      var view = new app.CollectionView({
        collection: self
      });
    });
  },
  url: '/api'
});

app.CollectionView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function () {
    console.log("CollectionView is a go");
    this.render();
  },
  render: function(){
    console.log("CollectionView is rendered");
    var models = this.collection.models;
    for (var m in models) {
      new app.ModelView({
        model: models[m],
        el: this.el
      })
    }
  }
});

app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log('A modelView was dynamically generated');
    this.render();
  },
  render: function() {
    console.log("ModelView Rendering");
    var data = this.model.attributes;
    var template = $('#recipe-template').html();
    var compileTpl = _.template(template);
    var html = compileTpl(data);
    console.log(html);
    this.$el.append(html);
    console.log("Rendering to page");
  }
});

$(document).ready(function() {
  console.log('here we go! pancakes, pancakes everywhere!');
  active.collection = new app.Collection();

});
