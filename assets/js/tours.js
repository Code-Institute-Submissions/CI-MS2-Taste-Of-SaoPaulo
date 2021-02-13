function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: -23.587173869719777,
            lng: -46.63104573030306
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
    ];

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

function tourSelected(tourId) {
    alert(tourId);
}
