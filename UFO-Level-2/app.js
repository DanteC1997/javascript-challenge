// from data.js
var tableData = data;
console.log(tableData);

// table body
var tbody = d3.select("tbody");

// sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // append one table row `tr` for each UFO sighting
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // input date, state, shape and get the HTML nodes
    var inputElement = d3.select("#input");
    // get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // append one table row `tr` for each UFO sighting
    var row = tbody.append("tr");
    // use `Object.entries` to console.log each UFO sighting
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});