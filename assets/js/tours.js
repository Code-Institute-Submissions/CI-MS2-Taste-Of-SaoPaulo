//variable to transport the locations to be marked on map;
var locations = [];

/*
funtion responsible for open the tour details section and by tourid, 
set the geographic coordinates on locations array
*/
function tourSelected(tourId) {
    var element = document.getElementById("tourDetails");
    element.style.display='block';
    element.scrollIntoView();
    locations = [
        { lat: -23.56054857032437, lng: -46.655924815342445 },
        { lat: -23.54531563724587, lng: -46.64382473327 },
        { lat: -23.55005416854508, lng: -46.6342223602564 }
    ];    
    initMap();
}

/*
google init function. It was changed to get dinamically the array of locations to be marked
(passed by tourSelected function) and sets the center point of the map to the 2 index of locations
array, centralizing the map exactly where the user is going to see.
*/
function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: locations[1]
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //alert(locations);
    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });            
}
