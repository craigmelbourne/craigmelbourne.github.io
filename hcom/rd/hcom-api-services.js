

var locale_changer = function (){
  url = "http://localhost:8899/device/pos.html?pos=HCOM_FR&locale=fr_FR";

  $.ajax({
      dataType: "json",
      url: url
  }).done(function( html ) {
    console.log(html);
  });
}

var fetchHotelList = function (destination, cb){
	var url = buildSearchUrl(destination);

	console.log("fetch list")

	$.ajax({
  		dataType: "json",
  		url: url,
  		success: cb
	});

}

var fetchHotelDetails = function (id, cb){
	var url = buildHotelDetailsUrl(id);
  //var url = "http://localhost:8899/device/hotelDetails.html?hotelId=" + id + "&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0"
	console.log("fetch hotel details");

	$.ajax({
  		dataType: "json",
  		url: url,
  		success: cb
	});
}




// automate date
    var ci = new Date();
    var co = new Date();

    var ciDay = ci.getDate();
    var ciMonth = ci.getMonth() + 1;
    var ciYear = ci.getFullYear();
    
    co.setDate(ci.getDate() + 1)
    var coDay = co.getDate();
    var coMonth = co.getMonth() + 1;
    var coYear = co.getFullYear();



function buildSearchUrl(destination) {
  	var url = '', 
    //search_destination = (destination) ? destination : SearchForm.destination,
    hostname = window.location.hostname;

    // build query string
    var qStr = 'destination='+destination+'&cur=EUR&monthCheckIn='+ciMonth+'&dayInMonthCheckIn='+ciDay+'&monthCheckOut='+coMonth+'&dayInMonthCheckOut='+coDay+'&r=1&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'

    // build URL
	  if (hostname == 'localhost') {    
    	url = 'http://localhost:8899/device/search.html?'+qStr;
    } else {
    	url = '/api/uk/search.html?'+qStr;
  	}

  	return url;
}

function buildHotelDetailsUrl(id) {
    var url = '', 
     //search_destination = (destination) ? destination : SearchForm.destination,
     hostname = window.location.hostname;



     var qStr = 'hotelId='+ id + '&monthCheckIn=' + ciMonth + '&dayInMonthCheckIn=' + ciDay + '&monthCheckOut=' + coMonth + '&dayInMonthCheckOut=' + coDay + '&rooms[0].numberOfAdults=2&roomno=1&reviewOrder=date_newest_first&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0'

  if (hostname == 'localhost') {    
      //url = "http://localhost:8899/device/hotelDetails.html?hotelId=" + id + "&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0";
      url = 'http://localhost:8899/device/hotelDetails.html?' + qStr;
    } else {
      //url = "/api/hotelDetails.html?hotelId=" + id + "&na=os%3DFacebook%7Ccv%3D1171%7Csv%3D2%7Cid%3DCFUUID9BC82AC4A123485586F5F6AFEF2084E0";
      url = '/api/uk/hotelDetails.html?' + qStr;
    }

    return url;
}

//var map;
function initializeMap(destination) {

	console.log("initilaise map")
      
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        //center: loc,
        zoom: 16,
        mapTypeId: 'roadmap',
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        panControl: false,
        mapTypeControl: false,
        streetViewControl:false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    });

}

