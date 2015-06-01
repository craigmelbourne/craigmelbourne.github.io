var pdpOpen = false;
var srpFocus = "list";
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow;
var selectedMarker = 0;
var normalIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
var selectedIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
var shortlistIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
var shortlist = [];
var gmarkers = [];

// events

$(function(){
	//set up pdp
	//pdpSetUp();

    



	initializeMap("london")
	fetchResults("london")

	$("#list").on("click", ".listing", function(){
		if (!pdpOpen) {
			$("#pdp-wrapper").show("slide", { direction: "right" }, 300);
			pdpOpen = true;
		}

        fetchHotelDetails($(this).attr("id"));

			// load pdp details
	});

    $("#list").on("click", ".listing .shortlist", function(){
        //$(this).css("color", "#090");
    })

	// close pdp 
	$("#pdp-wrapper #pdp-close").on("click", function(){
		//var width = $(window).width();
		$("#pdp-wrapper").hide("slide", { direction: "right" }, 300);
		pdpOpen = false;
		if (srpFocus == "map"){
			$("#map").animate({
				left:0,
				right: 0
			}, function(){
                google.maps.event.trigger(map,'resize');
            });

			//$("#big_list").hide();
            //$("#big_map").show();
		}
	});


	$("#big_list").on("click", function(){ 
		$("#map").animate({
			left:"700px",
			right: 0
		});
		$("#pdp-wrapper").hide("slide", { direction: "right" }, 300);
		$(this).hide();
        $("#big_map").show();
		//$("#big_map").show();
		pdpOpen = false;
        srpFocus = "list";
	});

    $("#big_map").on("click", function(){
        $("#map").animate({
            left:0,
            right: 0
        }, function(){
            google.maps.event.trigger(map,'resize');
        });
        $(this).hide();
        $("#big_list").show();
        srpFocus = "map";
    });

    $("#pdp-wrapper").on("click", ".shortlist", function(){
        $(this).css("color", "#090").html("&#9733; Hotel is shortlisted");
        
        if(shortlist.indexOf($(this).attr("rel")) == -1) {
            shortlist.push($(this).attr("rel"));
            $("#list").find("#" + $(this).attr("rel") + " .shortlist").css("color", "#090");
            $("#open-shortlist span").text(shortlist.length);

            changeMarkerIcon(gmarkers[$(this).attr("rel")]);
        }

    });

});

var pdpSetUp = function(){
	var width = $("#map").width();
	var right = width * -1;
	$("#pdp-wrapper").css({
		width: width+"px"
	});
}

function changeMarkerIcon(marker) {
    marker.setIcon(shortlistIcon);
}

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

function pdpFromMap(details){
	



	//console.log("updatePDP");
	if (!pdpOpen){
		$("#map").animate({
			left:"0",
			right: ($(window).width() - 700) + "px"
		}); 

		//$(this).hide();
        $("#big_map").hide();
		$("#big_list").show();

		$("#pdp-wrapper").show("slide", { direction: "right" }, 300);
		pdpOpen = true;
		srpFocus = "map";

	} 
}

function fetchResults(result){

    var lon;
    var lat;

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
    console.log(coMonth+"/"+coDay+"/"+coYear)

    geocoder.geocode( { 'address': result}, function(pos, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(pos);
            lon = pos[0].geometry.location.A;
            lat = pos[0].geometry.location.f;

            //console.log("pos");
            //console.log(pos);
             
        
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
            longitude: lon, //result[0].lon,
            latitude: lat, //result[0].lat,
            searchRadius: 2,
            searchRadiusUnit: "MI",
            numberOfResults: 20
        },

        // whether this is a POST or GET request
        type: "GET",

        // the type of data we expect back
        dataType : "jsonp",
        timeout:3000,
 
        // code to run if the request succeeds;
        // the response is passed to the function
        success: function( json ) {
            console.log(json);
           
           var hotels = json.HotelListResponse.HotelList.HotelSummary;
           //console.log(hotels);

           $.each(hotels, function(i, hotel) {

                var starRating = "";
                for (i = 1; i <= Math.floor(hotel.hotelRating) ; i++) { 
                    starRating += "<span class='star'>&#9733;</span>";
                }

                if (Math.round(hotel.highRate) != Math.round(hotel.lowRate)){
                    total = "<span class='total' style='color:#D41200'>&pound;" + Math.round(hotel.lowRate) + "</span> <span class='high-price'>&pound;" + Math.round(hotel.highRate) + "</span>" 
                } else {
                    total = "<span class='total'>&pound;" + Math.round(hotel.lowRate) + "</span>";
                }

           		$("#list").append(
           			'<div id="' + hotel.hotelId + '" class="listing">' 
                    + '<div class="image" style="background-image: url(http://images.travelnow.com' + hotel.thumbNailUrl + ');"></div>'
                    + '<div class="details">'
                    + '<div class="name">' + hotel.name + '</div>'
                    + '<div class="star-rating">' + starRating + '</div>'
                    + "<div><img class='ta' src='" + hotel.tripAdvisorRatingUrl + "' style=''/></div>"
                    + '<div class="price">' + total + '</div>'
                    + '<div>price for 1 night including taxes and fees</div>'
                    + '</div>'
                    + '<div class="shortlist" rel="' + hotel.hotelId + '">&#9733;</div>'
                    + '</div>'
           		);

        		var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(hotel.latitude, hotel.longitude),
                    icon: normalIcon,
                    map: map
                });

                gmarkers[hotel.hotelId] = marker;

                var infoWindowContent = "<input type='hidden' value='" + hotel.hotelId + "' /> <div class='name'>" + hotel.name + "</div>" + "<img class='ta' src='" + hotel.tripAdvisorRatingUrl + "' />" + "<div class='price'>&pound;" + Math.round(hotel.lowRate) + "</div>" ;

                google.maps.event.addListener(marker, 'mouseover', function() {
                    infowindow.setContent(infoWindowContent);
                    infowindow.open(map,marker);
                    //console.log(infoWindowContent);
                    
                });

                google.maps.event.addListener(marker, 'click', function(){
                    pdpFromMap(infoWindowContent);
                    fetchHotelDetails(hotel.hotelId);
                    $("#pdp-wrapper #pdp").remove();
                    infowindow.close();

                    //marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
                    
                    gmarkers[hotel.hotelId].setIcon(selectedIcon);

                    if (selectedMarker != 0){
                        //console.log("sel " + selectedMarker + ": this" + hotel.hotelId);
                        //console.log(shortlist)
                        if (shortlist.indexOf(selectedMarker.toString()) != -1){
                            gmarkers[selectedMarker].setIcon(shortlistIcon);
                        } else {
                            gmarkers[selectedMarker].setIcon(normalIcon);
                        }
                    }
                    
                    //gmarkers[selectedMarker].setIcon(normalIcon)

                    //console.log(shortlist.indexOf(selectedMarker))
                    //if (shortlist.indexOf(selectedMarker) != -1){
                      //  gmarkers[selectedMarker].setIcon(shortlistIcon)
                    //} else {
                       // gmarkers[selectedMarker].setIcon(normalIcon)
                    //}


                    
                    selectedMarker = hotel.hotelId;
                    //gmarkers[hotel.hotelId].setIcon(selectedIcon);
                    
                    

                })
        
    		});

           //console.log(gmarkers);

        },
 
        // code to run if the request fails; the raw request and
        // status codes are passed to the function
        error: function( xhr, status, errorThrown ) {
             //alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        },
 
        // code to run regardless of success or failure
        complete: function( xhr, status ) {
            
        }
    });

    } else {
        console.log("can't find destination");
    }
    });


}

function fetchHotelDetails(id){
                $("#pdp-wrapper #pdp").remove();
                $.ajax({
        
                    crossDomain: true,
                    // the URL for the request
                    url: "https://api.eancdn.com/ean-services/rs/hotel/v3/info",
 
                    // the data to send (will be converted to a query string)
                    data: {
                        cid: 55505,
                        minorRev: 99,
                        apiKey: "xgdsee58vcvfhpr4hhvvhych",
                        locale: "en_US",
                        currencyCode: "GBP",
                        hotelId: id
                    },

                    // whether this is a POST or GET request
                    type: "GET",

                    // the type of data we expect back
                    dataType : "jsonp",
                    timeout:3000,
 
                    // code to run if the request succeeds;
                    // the response is passed to the function
                    success: function( json ) {
                        //console.log(json.HotelInformationResponse);
                        //var summary = json.
                        buildHotelDetails(json.HotelInformationResponse)
                    },
 
                    // code to run if the request fails; the raw request and
                    // status codes are passed to the function
                    error: function( xhr, status, errorThrown ) {
                        //alert( "Sorry, there was a problem!" );
                        console.log( "Error: " + errorThrown );
                        console.log( "Status: " + status );
                        console.dir( xhr );
                    },
 
                    // code to run regardless of success or failure
                    complete: function( xhr, status ) {}
                });
            };


function buildHotelDetails(hotel){
    //console.log(hotel);
    //console.log(hotel.HotelSummary.name);



    $("#pdp-wrapper").append(
        "<div id='pdp'>"
        + '<div class="shortlist" rel="' + hotel.HotelSummary.hotelId + '">&#9733; Shortlist this hotel</div>'
        + "<div style='position:relative;'><div>"
        
        + "<h1>" + hotel.HotelSummary.name + "</h1>" 
        + "<div id='star-rating'>" + hotel.HotelSummary.hotelRating + " &#9733; hotel" + "</div>"
        + "<div id='address'>" + hotel.HotelSummary.address1 + ", " + hotel.HotelSummary.postalCode + ", " + hotel.HotelSummary.city + "</div>"
        + "</div>"
        + "<div id='trip-advisor'><img src='" + hotel.HotelSummary.tripAdvisorRatingUrl + "' style='width:80px;'/> | <span id='ta-reviews'>" + hotel.HotelSummary.tripAdvisorReviewCount + " reviews</span></div>"
        + "</div>"
        + "<div id='hotel-images'><img src='" + hotel.HotelImages.HotelImage[0].url + "' /></div>"
        + "<div id='description'>" + hotel.HotelDetails.locationDescription + "</div>"
        + "</div>"
    );

    //console.log(shortlist);
    //console.log(hotel.HotelSummary.hotelId)
    //console.log(shortlist.indexOf(hotel.HotelSummary.hotelId.toString()));

    if (shortlist.indexOf(hotel.HotelSummary.hotelId.toString()) != -1){
        //console.log("shortlisted");
        $("#pdp-wrapper").find("#pdp .shortlist").css("color", "#090").html("&#9733; Hotel is shortlisted");
    }


        
}