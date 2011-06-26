// var w = 960,
//     h = 500;

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
      var matches = [];
      filters.each(function(f) {
        f.selectedValues.each(function(val, key) {
          if (d.all(f.property.key).get(key)) {
            matches.push(val);
          }
          totalMatches += 1;
        });
      });
      
      minMatches = Math.min(minMatches, matches.length);
      maxMatches = Math.max(maxMatches, matches.length);
      d.matches = matches;
      
    });
    
    var weight = d3.scale.linear().domain([minMatches,maxMatches]).range([0.4,0.9])

    data.forEach(function(d, i) {
      d.x = parseInt((i % cols)*size, 10);
      d.y = Math.floor(i / cols)*size;
      d.dx = size;
      d.dy = size;
      d.weight = (minMatches > 0 && maxMatches>minMatches) ? weight(d.matches.length) : 0.9;
      d.maxMatches = maxMatches;
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
  var width = 800, height = 600;

  function init() {
    vis = d3.select("#canvas")
      .append("svg:svg")

    initialized = true;
  }
  
  // Update cell position and scale
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
    
    width = $('#canvas').width();
    height = $('#canvas').height();
    
    matrix = Matrix(filters)
      .size(width, height);
    
    cells = vis.data([collection.items().values()]).selectAll("g.cell")
      .data(matrix, function(d) { return d._id; });
      
    // Transition of new (arriving cells)
    var enteringCells = cells.enter().append("svg:g")
        .attr("class", "cell")
        .attr("transform", function() { return "translate("+Math.round(Math.random()*width)+","+Math.round(Math.random()*height)+") scale(1,1)";})
    
    // Add image and matches to cell
    enteringCells.append("svg:g")
      .attr("class", "image")
      .attr("transform", function(d) { return "translate("+(0.5-d.weight/2)+","+(0.5-d.weight/2)+") scale("+d.weight+","+d.weight+")"; })
      .append("svg:image")
      .attr("width", function(d) { return 1; })
      .attr("height", function(d) { return 1; })
      .attr("image-rendering", "optimizeSpeed")
      .attr("xlink:href", function(d)  {
        return d.get('image') || "images/david.png"
      })
        
    enteringCells.transition()
        // .delay(function(d, i) { return i * 20; })
        .duration(1500)
        .call(cell);
  
    // Transition of existing cells
    var existingCells = cells.transition()
      // .delay(function(d, i) { return i * 20; })
      .duration(1500)
      .call(cell);
    
    // TODO: select and update content (rect+image appropriately)
    var rects = cells.select('g.image')
      // .data(matrix)
      .transition()
      .duration(1500)
        .attr("transform", function(d) { return "translate("+(0.5-d.weight/2)+","+(0.5-d.weight/2)+") scale("+d.weight+","+d.weight+")"; })
    
    // Update matches

    function match(sel) {
      sel
        .data(function(d, i) { return d.matches; })
        .enter()
        .append('svg:rect')
        .attr('class', 'match')
        .attr("x", function(d, i) { return 0.2*i; })
        .attr("y", function(d, i) { return 0; })
        .attr("fill", function(d) { return d; })
        .attr("image-rendering", "optimizeSpeed")
        .attr("stroke-width", 0.01)
        .attr("stroke", '#fff')
        .attr("width", function(d, i) { return 0.16; })
        .attr("height", function(d, i) { return 0.16; })
    }
    
    // Remove all matches
    cells.selectAll('g.image').selectAll('rect').remove();
    
    
    // Build matches
    cells.selectAll('g.image').selectAll('rect')
      .call(match);
    
    // Build matches
    enteringCells.selectAll('g.image').selectAll('rect')
        .call(match);

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