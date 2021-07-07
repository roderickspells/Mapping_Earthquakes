// Add console.log to check to see if our code is working.
console.log("working");

// Alternate use of setView() - usefull when needing to add multiple tile layers// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
  //  center: [
 //     40.7, -94.5
 //   ],
 //   zoom: 4
 // }); 

 // Create the map object with a center and zoom level.
 //let map = L.map('mapid').setView([30, 30], 2);

 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Street": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// // Then we add our 'streets' tile layer to the map.
// //streets.addTo(map);

//  // Accessing the airport GeoJSON URL
// // Accessing the Toronto airline routes GeoJSON URL.
// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/roderickspells/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Create a style for the lines.
// let myStyle = {
//   color: "blue",
//   fillColor: "yellow",
//   weight: 1
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   style: myStyle,
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
//   }
// }).addTo(map);
// });

// // Coordinates for each point to be used in the polyline.
// //let line = [
//   //[33.9416, -118.4085],
//   //[37.6213, -122.3790],
//   //[40.7899, -111.9791],
//  // [47.4502, -122.3088]
// //];

// // Create a polyline using the line coordinates and make the line red.
// //L.polyline(line, {
//  // color: "yellow"
// //}).addTo(map);

// //skilldrill 13.4.3
// //let lineTwo = [
//   //[33.9416, -118.4085],
//   //[30.1975, -97.6664],
//   //[43.6777, -79.6248],
//  // [40.6413, -73.7781]
// //];

// //L.polyline(lineTwo, {
//   //color: 'blue',
//   //dashArray: '10,10',
//   //weight: 3,
//   //opacity: 0.5,
// //}).addTo(map);

// //Get data from cities.js
// let cityData = cities.js;

// //// Loop through the cities array and create one marker for each city.
// //cityData.forEach(function(city) {
//   //console.log(city)
//   //L.circleMarker(city.location, {
//     //color:"orange",
//    // fillColor: "orange",
//     //radius: city.population/200000

//   //})
//   //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// //.addTo(map);
// //});

