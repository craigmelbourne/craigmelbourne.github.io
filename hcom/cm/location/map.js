var geocoder = new google.maps.Geocoder();
var distanceService = new google.maps.DistanceMatrixService;

var markersLandmarks = [];
var markersTransport = [];

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
        zoom: 14,
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

    service = new google.maps.places.PlacesService(map);

    google.maps.event.addListenerOnce(map, 'idle', function(){
        // do something only the first time the map is loaded  
        displayHotelPin()
        fetchPOI(loc);
        displayTransportPOI();
        displayLandmarksPOI();
    });



    
}

var displayHotelPin = function(){
    var markerLabel = new MarkerWithLabel({
        position: loc,
        draggable: false,
        map: map,
        icon: markerImage,
        labelContent: "<span class='icon'>&#xe947;</span> " + hotelData.roomRates.lowPrice,
                //labelContent: "<i class='fa fa-university' aria-hidden='true'></i>",
                //labelAnchor: new google.maps.Point(40, 32),
        labelClass: "map-label-selected-hotel", // the CSS class for the label
        labelStyle: {opacity: 0.9}
    });
}

var displayTransportPOI = function(){
    console.log(content['lacoruna']);
    var transportObj = content['lacoruna'].transport

    $.each(transportObj, function(i, obj) {
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
        markersTransport.push(markerLabel);

        // displat list on panel
        $("#transport-list ul").append("<li><span class='icon'>" + poiTypeObj[0].iconfont + "</span> " + obj.name + "</li>")

    });
}

var displayLandmarksPOI = function(){
    console.log(content['lacoruna']);
    var landmarkObj = content['lacoruna'].landmarks

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

        $("#landmarks-list ul").append("<li><span class='icon'>" + poiTypeObj[0].iconfont + "</span> " + obj.name + "</li>")

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

function displayNameDistance(hotelLoc, place, type) {
    
    function getRating(){
        if (place.rating) {
            var rating = place.rating
            return " <span class='rating' style='color:#999; font-size:14px'>(rating:" + rating + "/5)</span>";
        } else {
            return "";
        }
    }

    

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

            var placeData = place.name + getRating();


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
            {name:"San Cristobal Train Station", latlng:"43.3526, -8.4099", type:"train"}
        ],

        landmarks: [
            {name:"Tower of Hercules", latlng:"43.3860, -8.4065", type:"monument"}
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








