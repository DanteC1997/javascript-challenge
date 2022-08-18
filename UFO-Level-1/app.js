// from data.js
var tableData = data;
console.log(tableData);


var tbody = d3.select("tbody");


tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    
    var row = tbody.append("tr");

    
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      
      var cell = row.append("td");
      cell.text(value);
    });
  });


// button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date
    var inputValue = inputElement.property("value");
    // console.log input
    console.log(inputValue);
    // data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // append one table row `tr` for each UFO sighting
    var row = tbody.append("tr");
    // use `Object.entries` to console.log each UFO sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
