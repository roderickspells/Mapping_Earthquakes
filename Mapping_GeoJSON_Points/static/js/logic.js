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
 let map = L.map('mapid').setView([37.5, -122.5], 10);

 // Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup(
      '<h2> Airport Code: ' +
        feature.properties.faa +
        '</h2> <hr> <h3> Airport Name: ' +
        feature.properties.name +
        '</h3>');
  }
  }).addTo(map);

// Coordinates for each point to be used in the polyline.
//let line = [
  //[33.9416, -118.4085],
  //[37.6213, -122.3790],
  //[40.7899, -111.9791],
 // [47.4502, -122.3088]
//];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
 // color: "yellow"
//}).addTo(map);

//skilldrill 13.4.3
//let lineTwo = [
  //[33.9416, -118.4085],
  //[30.1975, -97.6664],
  //[43.6777, -79.6248],
 // [40.6413, -73.7781]
//];

//L.polyline(lineTwo, {
  //color: 'blue',
  //dashArray: '10,10',
  //weight: 3,
  //opacity: 0.5,
//}).addTo(map);

//Get data from cities.js
let cityData = cities;

//// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
  //console.log(city)
  //L.circleMarker(city.location, {
    //color:"orange",
   // fillColor: "orange",
    //radius: city.population/200000

  //})
  //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//.addTo(map);
//});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);