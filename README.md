# Weather-application
This application gives the location and whether details of the place clicked on the map by the user.
## Implementation
* There are html, javascript and CSS files created for this project.
* The javascript file contains all the functions written for - fetching the APIs; getting the curernt position i.e latitue and longitude of the current location; drawing the map with an available API and providing attributes to those to make it look properly fit into the screen as wanted; Creating a marker which represents the current location of the user; Creating a popup to show the place name when clicked on the marker; to get the weather information with the help of another available API, fetching the details and displaying them for particular locations when clicked.
* The CSS file contains the styling needed for the map and the data to be displayed i.e the location details of the position clicked by the user.
* The main html file contains the main design and development part where these CSS and javascript files have been linked.
* The available APIs are fetched for the map design and the weather details of the all the locations respectively.
* The fetched API is taken as an input in the form of JSON data and the parsed into javascript object.
## Usage
* Whenever the user clicks on any point on the map, the location details of that point is diplayed on the screen.
* Location details would include - City name, humidity, temparature, maximum temparature, minimum temparature, pressure, latitude, longitude etc,.
* In the developers' view, when we inspect the website, and when it is running, the javascript object containing all the current location details is displayed in the console.
* Also, the latitude and the longitude of the place where the mouse pointer is clicked, is displayed in the console.
* There is a zoom option also, where the user can zoom into the places clearly for a clear zoomed view.
