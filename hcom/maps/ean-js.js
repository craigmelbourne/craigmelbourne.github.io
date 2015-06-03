var geocoder = new google.maps.Geocoder();
var gmarkers = [];

var ci = new Date();
var co = new Date();

var ciDay = ci.getDate();
var ciMonth = ci.getMonth() + 1;
var ciYear = ci.getFullYear();

console.log(ciMonth+"/"+ciDay+"/"+ciYear);

    
co.setDate(ci.getDate() + 1)
var coDay = co.getDate();
var coMonth = co.getMonth() + 1;
var coYear = co.getFullYear();


function initializeMap(destination) {
    
    //console.log(result[0].city)
    

//var loc = new google.maps.LatLng(result[0].lat, result[0].lon);
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        //center: loc,
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


    geocoder.geocode( { 'address': destination}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log (pos[0].geometry.location.k + " " + pos[0].geometry.location.B)
            map.setCenter(pos[0].geometry.location);
        } 
    });


    
}

var fetchResults = function() {
	

	$.ajax({
        
        crossDomain: true,
        // the URL for the request
        url: "https://api.eancdn.com/ean-services/rs/hotel/v3/list",
 
        // the data to send (will be converted to a query string)
        data: {
            cid: 55505,
            minorRev: 99,
            apiKey: "xgdsee58vcvfhpr4hhvvhych",
            locale: "en_US",
            currencyCode: "GBP",
            arrivalDate: ciMonth+"/"+ciDay+"/"+ciYear,
            departureDate: coMonth+"/"+coDay+"/"+coYear,
            //longitude: lon, //result[0].lon,
            //latitude: lat, //result[0].lat,
            destinationString: destination,
            searchRadius: 2,
            searchRadiusUnit: "MI",
            numberOfResults: 200
        }, 

        // whether this is a POST or GET request
        type: "GET",

        // the type of data we expect back
        dataType : "jsonp",
        timeout:3000,

        success: function(json) {
        	var hotels = json.HotelListResponse.HotelList.HotelSummary;
        	$.each(hotels, function(i, hotel) {
        		console.log(i + hotel.name); 

        		var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(hotel.latitude, hotel.longitude),
                    icon: "images/map_pin.png",
                    map: map
                });
        	});
        }

    })

}