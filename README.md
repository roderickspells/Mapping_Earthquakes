# Mapping_Earthquakes

## Overview

Using Javascript, CSS, and HTML to show the magnitudes of earthquakes over the world from the previous 7 days. Utilizing the Leaflet.js and D3.js libraries as well as GeoJSON data collected from US Geological Survey for Earthquakes and Tectonic plate data, added the data to the overlay layers .

Using Mapbox to generate an API key to render Maps in a browser, I created mulitple map layers to show a base map layer with Street View, a Satellite layer and a Dark Mode layer. Also adding in three overlay objects including a teconic plate, minor earthquakes, and major earthquakes.

- JavaScript ES6 was used to add GeoJSON data, features, and interactivity to maps

- JSON D3 and D3.js libraries were used to populate geographical maps with GeoJSON data

- Leaflet.js was used in conjuction with Mapbox API to create interactive maps with corresponding GeoJSON data.



### Software

VS Code \ 
CSS \ 
Javascript ES6 \ 
HTML \ 
d3.js \ 
Leaflet.js 

### Data Sources

- Earthquake Data from previous 7 days (June 30 - July 6th 2021) ![link](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

- Tectonic Plate Data ![link](https://github.com/fraxen/tectonicplates)

## Results

### Map Styles

#### Street View

![image](streetLayer.png)

#### Satellite View

![image](satelliteLayer.png)

#### Dark Mode View

![image](darkLayer.png)

#### Added Popup identifiers to display Earthquake Data

![image](popup.png)

- Earthquake and Major Earthquakes were separted into two layers to with their relative size based off of their radius increasing as the magnitude of the earthquake grew. 

- The smaller the circle, the smaller the earthquake. Also using varying colors to show the strength of the earthquake. The lighter (yellow) the smaller in magnitude, the larger (red) the larger in magnitude.

![image](baseMap.png)


### Overlay layers

#### Tectonic

![image](tectonicLayer.png)

#### Earthquakes

![image](earthquakeLayer.png)

#### Major Earthquakes

![image](majorEarthquake.png)




## Summary