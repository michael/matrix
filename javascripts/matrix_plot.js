var w = 960,
    h = 500;

// Matrix Layout
// ------------

var Matrix = function(filters) {
  var width = 1,
      height = 1,
      cols = 4;

  // Simple matrix layout algorithm
  // Computes a suitable column count to fit the matrix
  // dimensions (width x height)
  function computeCols(n, width, height) {
    var cols = 1, // number of cols
        a, // edge length
        rows; // number of rows

    while(true) {
      a = width / cols;
      rows = Math.ceil(n/cols);
      if (rows*a <= height && n*a*a <= width*height)
        return cols;
      else {
        cols += 1;
      }
    }
  }

  function matrix(data, i) {
    var cols = computeCols(data.length, width, height);
    var size = Math.floor(width / cols);
    
    var minMatches = Infinity;
    var maxMatches = -Infinity;
    var totalMatches = 0;
    
    // Precalculate matchedValues
    data.forEach(function(d, i) {
      var matches = 0;
      filters.each(function(f) {
        f.selectedValues.each(function(val, key) {
          if (d.all(f.property.key).get(key)) matches += 1;
          totalMatches ++;
        });
      });
      
      minMatches = Math.min(minMatches, matches);
      maxMatches = Math.max(maxMatches, matches);
      d.matches = matches;
    });
    
    var weight = d3.scale.linear().domain([minMatches,maxMatches]).range([0.4,0.9])

    data.forEach(function(d, i) {
      d.x = parseInt((i % cols)*size, 10);
      d.y = Math.floor(i / cols)*size;
      d.dx = size;
      d.dy = size;
      d.weight = (minMatches > 0 && maxMatches>minMatches) ? weight(d.matches) : 0.9;
    });
    return data;
  }

  matrix.size = function(w, h) {
    width = w;
    height = h;
    return matrix;
  };
  
  return matrix;
};



// Matrix Plot
// ------------

var MatrixPlot = function(el, options) {
  var vis, matrix, cells, collection;
  var selectedValues;
  var initialized = false;

  function init() {
    vis = d3.select("#canvas")
      .append("svg:svg")
        .attr("width", w)
        .attr("height", h);


    initialized = true;
  }

  function cell() {
    this
      .attr("transform", function(d) {
        return "translate("+(d.x)+", "+(d.y)+") scale("+(d.dx-0)+","+(d.dy-0)+")"
      });
  }
  
  // function 
  
  function weight(obj) {
    return Math.random();
  }

  function update(options) {
    collection = options.collection;
    filters = options.filters;
    if (!initialized) init();
    
    matrix = Matrix(filters)
      .size(700, 500);
    
    cells = vis.data([collection.items().values()]).selectAll("g")
      .data(matrix);

    // Transition of new (arriving cells)
    var enteringCells = cells.enter().append("svg:g")
        .attr("class", "cell")
        .attr("x", function(d) { return 0; })
        .attr("y", function(d) { return 0; /*Math.round(Math.random()*h); */ })
        .attr("transform", function() { return "translate("+Math.round(Math.random()*w)+","+Math.round(Math.random()*h)+") scale(1,1)";})
    
    
    enteringCells.append("svg:image")
      .attr("x", function(d) { return 0.5-d.weight/2; })
      .attr("y", function(d) { return 0.5-d.weight/2; })
      .attr("width", function(d) { return d.weight; })
      .attr("height", function(d) { return d.weight; })
      .attr("xlink:href", "http://a3.twimg.com/profile_images/53366429/smoofles.png")
      
    // Experimental
    // enteringCells.append("svg:rect")
    //   .attr("x", 0.95)
    //   .attr("y", 0.8)
    //   .attr("width", 0.1)
    //   .attr("height", 0.1)
    
    enteringCells.transition()
        // .delay(function(d, i) { return i * 20; })
        .duration(800)
        .call(cell);

  
    // Transition of existing cells
    var existingCells = cells.transition()
      // .delay(function(d, i) { return i * 20; })
      .duration(800)
      .call(cell);
    
    
    // TODO: select and update content (rect+image appropriately)
    var rects = cells.select('image')
      // .data(matrix)
      .transition()
      .duration(800)
      .attr("x", function(d) { return 0.5-d.weight/2; })
      .attr("y", function(d) { return 0.5-d.weight/2; })
      // .attr("rx", function(d) { return 5 / ((d.dx-5)); })
      // .attr("ry", function(d) { return 5 / ((d.dy-5)); })
      .attr("width", function(d) { return d.weight; })
      .attr("height", function(d) { return d.weight; })

    // Exit transition
    cells.exit().transition()
      // .delay(function(d, i) { return i * 20; })
      .duration(800)
      .attr("transform", function() { return "translate("+(Math.random()*400*-1)+","+(Math.random()*400*-1)+") scale(1,1)";})
      .remove();
  }

  // Expose Public API
  return {
    update: update
  }
};