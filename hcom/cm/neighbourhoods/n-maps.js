var geocoder = new google.maps.Geocoder();
var map;

var neighbourhoods = {
    akasaka : {
        name: "Akasaka",
        center: {lat: 35.6794862140995, lng: 139.734433905381}
    }, 

    asakusa : {
        name: "Asakusa",
        center: {lat: 35.7252128673964, lng: 139.799428428791}
    }, 

    ginza : {
        name: "Ginza",
        center: {lat: 35.6712935174737, lng: 139.764315704409}
    },

    nihonbashi : {
        name: "Nihonbashi",
        center: {lat: 35.6841591001463, lng: 139.776211321046}
    },

    shinjuku : {
        name: "Shinjuku",
        center: {lat: 35.692248403859, lng: 139.69102634108}
    }
}


function initializeMap(destination) {
    
   
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat: 35.675, lng: 139.76},
        zoom: 12,
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
            
        } 
    });


    google.maps.event.addListenerOnce(map, 'idle', function(){
    // do something only the first time the map is loaded
        //randomMarkers();
        //addNeighbourhoodPin();
        //addNeighbourhoodPins();
    });

    neighbourhoodPolygon = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      radius: 2000
    });
}