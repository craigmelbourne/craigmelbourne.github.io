var geocoder = new google.maps.Geocoder();
var distanceService = new google.maps.DistanceMatrixService;

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var markersLandmarks = [];
var markersTransport = [];

var transportObj;
var landmarkObj;

var openInfoWindow = false; 

var map;
//var service;
var infowindow;
var placesList;
var service;
var loc = {lat: 50.117089, lng: -5.534462}; 
var markerImage = new google.maps.MarkerImage('images/marker.png',

    // This marker is 129 pixels wide by 42 pixels tall.
    new google.maps.Size(129, 42),

    // The origin for this image is 0,0.
    new google.maps.Point(0,0),

    // The anchor for this image is the base of the flagpole at 18,42.
    new google.maps.Point(18, 42)
);
var types = ["hospital", "pharmacy", "store", "grocery_or_supermarket", "convenience_store"]
var placeTypes = {
    "places": [
        
        
        {type: "cafe", rank:"distance", title:"Cafe", num_results:"3"},
        {type: "restaurant", rank:"distance", radius: "2000", title:"Restaurants", num_results:"3"},

        {type: "pharmacy", rank:"distance", radius: "2000", title:"Pharmacy", num_results:"1"},
        {type: "hospital", rank:"prominence", radius: "10000", title:"Hospital", num_results:"1"},
        //{type: "doctor", rank:"prominence", radius: "2000", title:"Doctor", num_results:"1"},
        
        {type: "bar", rank:"distance", radius: "2000", title:"Bars", num_results:"3"},
        //{type: "night_club", rank:"distance", title:"Nightlife", num_results:"3"},
        {type: "grocery_or_supermarket", rank:"distance", title:"Supermarket / Store", num_results:"3"},
        //{type: "convenience_store", rank:"prominence", radius: "2000", title:"Convenience Store", num_results:"3"},
        {type: "department_store", rank:"distance", title:"Department Store", num_results:"3"},
        //{type: "bakery", rank:"distance", title:"Bakery", num_results:"2"},
        
        {type: "atm", rank:"distance", radius: "2000", title:"ATM", num_results:"3"},

        {type: "gas_station", rank:"distance", radius: "10000", title:"Petrol Station", num_results:"3"},
        {type: "bus_station", rank:"distance", radius: "10000", title:"Bus Station", num_results:"3"}
        
        
        
        //{type: "hardware_store", rank:"prominence", radius: "2000", title:"Hardware Store", num_results:"2"},
        //{type: "home_ware_store", rank:"prominence", radius: "2000", title:"Homeware Store", num_results:"2"}
    ]
}





function initializeMap() {
    
    
   
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: loc,
        zoom: 13,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    });

    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport: false});
    directionsDisplay.setMap(map);
    service = new google.maps.places.PlacesService(map);
    //directionsDisplay.setMap(map);

    google.maps.event.addListenerOnce(map, 'idle', function(){
        // do something only the first time the map is loaded  
        displayHotelPin()
        fetchPOI(loc);
        displayTransportPOI();
        displayLandmarksPOI();
    });



    
}

function calcRoute(obj) {
    
    //console.log("calc route")

    var locStr = obj.latlng.split(", ");
    var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);

    //console.log(latlngObj);

 var request = {
    origin: loc,
    destination: latlngObj,
    travelMode: google.maps.TravelMode[obj.transitMode]
  };
  directionsService.route(request, function(response, status) {
    //console.log(response)
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);

    }
  });
}

var displayHotelPin = function(){
    var markerLabel = new MarkerWithLabel({
        position: loc,
        draggable: false,
        map: map,
        icon: markerImage,
        labelContent: "<span class='icon'>&#xe947;</span> " + hotelData.roomRates.lowPrice,
        //labelAnchor: new google.maps.Point(40, 32),
        labelClass: "map-label-selected-hotel", // the CSS class for the label
        labelStyle: {opacity: 0.9}
    });
}

var displayTransportPOI = function(){
    console.log(content['lacoruna']);
    transportObj = content['lacoruna'].transport

    $.each(transportObj, function(i, obj) {
        //console.log(transport.name);
        var locStr = obj.latlng.split(", ");
        var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);
        //console.log(latlngObj);
        var poiTypeObj = getObjects(typeDescription, 'type', obj.type);
        //console.log(poiTypeObj);

        var markerLabel = new MarkerWithLabel({
            position: latlngObj,
            draggable: false,
            map: map,
            icon: markerImage,
            labelContent: "<span class='icon'>" + poiTypeObj[0].iconfont + "</span>",
            labelAnchor: new google.maps.Point(10, 8),
            labelClass: "poi-transport", // the CSS class for the label
            labelStyle: {opacity: 0.9}
        });
        
        markersTransport.push(markerLabel);

        var num = markersTransport.indexOf(markerLabel);

        var infowindow = new google.maps.InfoWindow({
            content: obj.name
        });

        google.maps.event.addListener(markerLabel, 'click', function() {
           

            if( openInfoWindow ) {
                openInfoWindow.close();
            }

            openInfoWindow = infowindow;

            infowindow.open(map, markersTransport[num]);
            calcRoute(obj);
        });

        google.maps.event.addListener(markerLabel, 'mouseout', function() {
            //infowindow.close();
        });

        // displat list on panel
        //$("#transport-list ul").append("<li rel='" + num + "'><span class='icon'>" + poiTypeObj[0].iconfont + "</span> " + obj.name + "</li>")
        getDistance(latlngObj, "transport-list", obj, num, poiTypeObj[0].iconfont, obj.transitMode);
    });
}

var displayLandmarksPOI = function(){
    //console.log(content['lacoruna']);
    landmarkObj = content['lacoruna'].landmarks

    $.each(landmarkObj, function(i, obj) {
        //console.log(transport.name);
        var locStr = obj.latlng.split(", ");
        var latlngObj = new google.maps.LatLng(locStr[0], locStr[1]);
        //console.log(latlngObj);
        var poiTypeObj = getObjects(typeDescription, 'type', obj.type);
        console.log(poiTypeObj);

        var markerLabel = new MarkerWithLabel({
            position: latlngObj,
            draggable: false,
            map: map,
            icon: markerImage,
            labelContent: "<span class='icon'>" + poiTypeObj[0].iconfont + "</span>",
            labelAnchor: new google.maps.Point(10, 8),
            labelClass: "poi-transport", // the CSS class for the label
            labelStyle: {opacity: 0.9}
        });
        
        markersLandmarks.push(markerLabel);

        var infowindow = new google.maps.InfoWindow({
            content: obj.name
        });

        google.maps.event.addListener(markerLabel, 'click', function() {
           

            if( openInfoWindow ) {
                openInfoWindow.close();
            }

            openInfoWindow = infowindow;

            infowindow.open(map, markersLandmarks[num]);
            calcRoute(obj);
        });

        var num = markersLandmarks.indexOf(markerLabel);


        getDistance(latlngObj, "landmarks-list", obj, num, poiTypeObj[0].iconfont, obj.transitMode);
        //$("#landmarks-list ul").append("<li><span class='icon'>" + poiTypeObj[0].iconfont + "</span> " + obj.name + "</li>")

    });
}

function displayPlacesList(places, status, type, num_results){
    //console.log(places);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        
        if (places.length == 0) {
            //console.log ()
            $("#list ul#" + type + "list").append("<li> non found </li>")

        } else if (places.length < 3) {
            for (var i = 0; i < places.length; i++) {
                displayNameDistance(loc, places[i], type);
            }
        } else {
            for (var i = 0; i < 3; i++) {
                displayNameDistance(loc, places[i], type);
            }
        }

        

        $.each(places, function (index, place) {
            //console.log(place);
            //displayNameDistance(loc, place, type);
            
        });
        
    }
}

function getRating(place){
        if (place.rating) {
            var rating = place.rating
            return " <span class='rating' style='color:#999; font-size:11px'>(" + rating + "/5)</span>";
        } else {
            return "";
        }
    }


var getDistance = function(endLoc, elem, obj, num, icon, mode) {
    distanceService.getDistanceMatrix({
        origins: [loc],
        destinations: [endLoc],
        travelMode: google.maps.TravelMode[mode],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            alert('Error was: ' + status);
        } else {
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            $("#" + elem + " ul").append("<li rel='" + num + "'><span class='icon'>" + icon + "</span><div class='item'><div> " + obj.name + "</div><div class='distance'>" + distance + " - " + duration + " - " + mode + "</div></div></li>")
        }

    })
}

function displayNameDistance(hotelLoc, place, type) {
    
    

    

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

            var placeData = place.name + getRating(place);


            //console.log(place.name + " - " + response.rows[0].elements[0].distance.text);
            //return(response.rows[0].elements[0].distance.text);
            $("#list ul#" + type + "list").append("<li>" + placeData + " - " + response.rows[0].elements[0].distance.text + "</li>")
        }
    })
}

function fetchPOI(location) {
    //console.log ("running")


    $.each(placeTypes.places, function (index, placeType) {
            //console.log(placeType.title);
            $("#list").append("<h3>" + placeType.title + "</h3>")
    $("#list").append($( "<ul id='" + placeType.type + "list'/>" ));

    if (placeType.rank == "prominence") {
        service.nearbySearch({
        location: location,
        radius: placeType.radius,
        //rankBy: google.maps.places.RankBy.DISTANCE,
        type: [placeType.type]
        
        
        }, function(results, status){displayPlacesList(results, status, placeType.type, placeType.num_results )} );
    } else {
        service.nearbySearch({
        location: location,
        //radius: 2000,
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: [placeType.type]
        
        
        }, function(results, status){displayPlacesList(results, status, placeType.type, placeType.num_results )} );
    }
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


// GeoCoder function
/* geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);

            
        }
});*/

var typeDescription = [
    {type: "airport", description: "Airport", iconfont: "&#xe95e;"},
    {type: "anchor", description: "Harbors and Seaports", iconfont: "&#xe944;"},
    {type: "casino", description: "Casino", iconfont: "&#xe944;"},
    {type: "civic", description: "Civic buildings", iconfont: "&#xe944;"},
    {type: "golf", description: "Golf course", iconfont: "&#xe944;"},
    {type: "historic", description: "Historic Buildings", iconfont: "&#xe944;"},
    {type: "icecream", description: "Amusement Parks, Zoos, etc...", iconfont: "&#xe944;"},
    {type: "medical", description: "Hospitals / Medical buildings", iconfont: "&#xe944;"},
    {type: "monument", description: "Towers, Arches, Fountains, Churches, etc...", iconfont: "&#xe944;"},
    {type: "museums", description: "Museum", iconfont: "&#xe944;"},
    {type: "school", description: "Universities", iconfont: "&#xe944;"},
    {type: "shopping", description: "Shopping", iconfont: "&#xe944;"}, 
    {type: "sign", description: "Squares or Centers", iconfont: "&#xe944;"},
    {type: "skiing", description: "Ski resort", iconfont: "&#xe944;"},
    {type: "stadium", description: "Sports stadiums/Arenas", iconfont: "&#xe944;"},
    {type: "sunglass", description: "Beach", iconfont: "&#xe944;"},
    {type: "theater", description: "Theater", iconfont: "&#xe944;"},
    {type: "tree", description: "Parks / Nature", iconfont: "&#xe944;"},
    {type: "train", description: "Train station", iconfont: "&#xe930;"},
    {type: "winery", description: "Winery", iconfont: "&#xe944;"}
]


var content = {
    lacoruna : {
        name: "La Coruna", 
        destinationId: "457467",
        
        transport: [
            {name:"San Cristobal Train Station", latlng:"43.3526, -8.4099", type:"train", transitMode:"DRIVING"},
            {name:"La Coruña Airport", latlng:"43.3020, -8.3811", type:"airport", transitMode:"DRIVING"}
        ],

        landmarks: [
            {name:"Tower of Hercules", latlng:"43.3860, -8.4065", type:"monument", transitMode: "WALKING"},
            {name:"Aquarium Finisterrae", latlng:"43.3840, -8.4097", type:"icecream", transitMode: "WALKING"},
            {name:"Museo Domus", latlng:"43.3776, -8.4065", type:"museums", transitMode: "WALKING"}, 
            {name:"Orzan Beach", latlng:"43.37031, -8.40351", type:"museums", transitMode: "WALKING"}
        ]
    }
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}








