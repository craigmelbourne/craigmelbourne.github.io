var geocoder = new google.maps.Geocoder();


function initializeMap(destination) {
    
   
    			map = new google.maps.Map(document.getElementById('map_canvas'), {
        //center: loc,
        		zoom: 13,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    });


    geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);
            randomMarkers();
            addNeighbourhoodPin();
        } 
    });


    


    
}


var randomMarkers = function(){
    var bounds = map.getBounds();

    var southWest = bounds.getSouthWest();

    var northEast = bounds.getNorthEast();

    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var markers = [];

    // Create some markers
    for (var i = 1; i < 50; i++) {

        var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map, 
            icon: "map-pin-red.png"
        });

        markers.push(marker);
    }  
}

var addNeighbourhoodPin = function(){
    var bounds = map.getBounds();

    var southWest = bounds.getSouthWest();

    var northEast = bounds.getNorthEast();

    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();

    var location = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

        var marker = new google.maps.Marker({
            position: location,
            map: map, 
            icon: "neighbourhood_icon.png"
        });

        marker.addListener('click', function() {
            openNeighbourhood();
        });
}

