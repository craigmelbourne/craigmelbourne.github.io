var geocoder = new google.maps.Geocoder();
var distanceService = new google.maps.DistanceMatrixService;

var map;
//var service;
var infowindow;
var placesList;
var service;
var loc = {lat: 50.117089, lng: -5.534462}; 
var types = ["hospital", "pharmacy", "store", "grocery_or_supermarket", "convenience_store"]
var placeTypes = {
    "places": [
        {type: "store", rank:"distance"},
        {type: "bar", rank:"distance"},
        {type: "grocery_or_supermarket", rank:"distance"},
        {type: "pharmacy", rank:"prominence", radius: "2000"},
        {type: "hospital", rank:"prominence", radius: "2000"}
    ]
}

/* types
 hospital
 pharmacy
 store
 grocery_or_supermarket
 convenience_store
*/



function initializeMap(destination) {
    
    
   
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 16,
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

    var marker = new google.maps.Marker({
        map: map,
        position: loc
  });

    //infowindow = new google.maps.InfoWindow();
            

    service = new google.maps.places.PlacesService(map);
    console.log(placeTypes.places[0].type)
    fetchPOI(placeTypes.places[0].type, loc)
    //fetchHospitalPlaces(loc);


   /* geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);

            
        }
            
    });*/


    google.maps.event.addListenerOnce(map, 'idle', function(){
        // do something only the first time the map is loaded  
    });



    
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    placesList = results;
    displayPlacesList()
    //console.log(placesList);
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
      //console.log(place)
    }
  }
}

function fetchPOI(type, location) {
    //console.log ("running")
    service.nearbySearch({
        location: location,
        radius: 2000,
        //rankBy: google.maps.places.RankBy.DISTANCE,
        type: [type]
        
        
    }, callback);
}

function fetchHospitalPlaces(location){
    service.nearbySearch({
        location: location,
        radius: 2000,
        //rankBy: google.maps.places.RankBy.DISTANCE,
        type: ["hospital"]
    }, displayHospital);
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    icon: "i/pin.png",
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function displayPlacesList(){
    $.each(placesList, function (index, place) {
        console.log(place);
        displatNameDistance(loc, place);
    });
}

function displatNameDistance(hotelLoc, place, type) {
    distanceService.getDistanceMatrix({
        origins: [hotelLoc],
        destinations: [place.geometry.location],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
        } else {
            console.log(place.name + " - " + response.rows[0].elements[0].distance.text);
            //return(response.rows[0].elements[0].distance.text);
            $("#list").append("<li>" + place.name + " - " + response.rows[0].elements[0].distance.text + "</li>")
        }
    })
}







