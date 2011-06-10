// Application
// -----------------


var Application = Backbone.View.extend({
  events: {
    
  },
  
  el: '#container',
  
  initialize: function() {
    this.project = new Project();
  },
  
  render: function() {
    // Should be rendered just once
    this.project.render();
    
    return this;
  }
});



// Colors
// ------------

var COLOR_PALETTES = {
  "greenish": ["#737920", "#90963C", "#A2C355"],
  "blueish": ["#808E89", "#5e899d", "#8DB5C8"],
  "redish": ["#974a2c", "#B16649", "#d36538"]
};

// bluegreen 

var colors = new ColorPool(COLOR_PALETTES);


// Facets
// -----------------

var Facets = Backbone.View.extend({
  events: {
    'click a.add-value': 'addValue',
    'click a.remove-value': 'removeValue'
  },
  
  el: '#facets',
  
  // Set a new filter
  addValue: function(e) {
    var property = $(e.currentTarget).attr('property'),
        value = $(e.currentTarget).attr('val');
    this.filters.get(property).selectedValues.set(value, colors.getNext());
    this.filterValueCount += 1;
    this.trigger('filter:changed');
    this.render();
    return false;
  },
  
  // Set a new filter
  removeValue: function(e) {
    var property = $(e.currentTarget).attr('property'),
        value = $(e.currentTarget).attr('val');

    this.filters.get(property).selectedValues.del(value);
    this.filterValueCount -= 1;
    this.trigger('filter:changed');
    this.render();
    return false;
  },
  
  initialize: function(options) {
    var that = this;
    this.project = options.project;
    
    this.filterValueCount = 0;
    
    // Register available facets
    this.filters = new Data.Hash();
    this.project.collection.properties().select(function(p, key) {
      if (p.meta.facet) {
        that.filters.set(key, {
          property: p,
          selectedValues: new Data.Hash()
        });
      }
    });
  },
  
  // availableProperties: function() {
  //   this.project.collection.properties().select(function(p, key) {
  //     return _.include(p.expectedTypes, 'string');
  //   });
  // },
  
  render: function() {
    $(this.el).html(_.tpl('facets', {
      filters: this.filters
    }));
    
    this.delegateEvents();
    
    return this;
  }
});


// Project
// -----------------

var Project = Backbone.View.extend({
  events: {
    
  },
  
  el: '#project',
  
  initialize: function() {
    var that = this;
    this.collection = new Data.Collection(countries_fixture);
    this.filteredCollection = this.collection;
    this.facets = new Facets({project: this});
    
    this.facets.bind('filter:changed', function() {
      that.filter();
    });
    
    this.plot = new MatrixPlot();
  },
  
  // Perform filter operation based on facets selection
  filter: function() {
    var that = this;
    if (this.facets.filterValueCount>0) {
      this.filteredCollection = new Data.Collection({
        properties: this.collection.properties(),
        items: {}
      });
      
      var objects = new Data.Hash();
      // For all filters calculate objects
      this.facets.filters.each(function(f) {
        if (f.selectedValues.length > 0) {
          var qry = {};
          qry[f.property.key+"|="] = f.selectedValues.keys()
          objects = objects.union(that.collection.find(qry));
          that.filteredCollection.g.replace('')
        }
      });
      
      // Register matched objects on the filtered collection
      objects.each(function(o, key) {
        that.filteredCollection.g.all('objects').set(key, o);
      });
    } else {
      that.filteredCollection = that.collection;
    }
    this.update();
  },
  
  // Update plot and facets
  update: function() {
    // Update plot accordingly
    this.plot.update({
      collection: this.filteredCollection,
      filters: this.facets.filters
    });
  },
  
  render: function() {
    // Should be rendered just once
    $(this.el).html(_.tpl('project', {
      
    }));
    
    this.facets.render();
    
    // Update plot
    this.plot.update({
      collection: this.collection,
      filters: this.facets.filters
    });
    
    return this;
  }
});