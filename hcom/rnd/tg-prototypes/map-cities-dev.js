var map;
var gmarkers = [];
var ids;
var currentView;
var currentMarker = "";
var continent = {
	"NA": {
		"latLong": new google.maps.LatLng(21.158964, -86.845940),
		"zoom": 3
	}, 
	"EU": {
		"latLong": new google.maps.LatLng(47.498405,19.040758),
		//50.850342, 4.351710
		"zoom": 3
	},
	"ASIA": {
		"latLong": new google.maps.LatLng(10.823099, 106.629662), 
		"zoom": 2
	},
	"SA": {
		"latLong": new google.maps.LatLng(-22.903540, -43.209587),
		"zoom": 3
	},
	"AUS": {
		"latLong": new google.maps.LatLng(-33.867489, 151.206985),
		"zoom": 3
	},
	"AF": {
		"latLong": new google.maps.LatLng(-33.924870, 18.424055),
		"zoom": 3
	}
};
					
$(document).ready(function () {
	
	$('#citylink li').mouseover(function(e){
		e.preventDefault();
		openInfoBox($(this).attr("id"));

	}); 
	
	$('a.continent').click(function(e){
		e.preventDefault();
		console.log($(this).attr('rel'));
		currentView = $(this).attr('rel');
		map.setZoom(continent[currentView].zoom);
		map.panTo(continent[currentView].latLong);
		map.panBy(-170, 0); 
		if (currentMarker != ""){
			closeInfoBox(currentMarker);
		}
		
	});
	
	
	
	var NA = new google.maps.LatLng(32.802956, -96.769920);
	var EU = new google.maps.LatLng(50.850342, 4.351710);
	var ASIA = new google.maps.LatLng(10.823099, 106.629662);
	var SA = new google.maps.LatLng(8.994269, -79.518791);
	var AUS = new google.maps.LatLng(-35.308235, 149.124222);
	var AF = new google.maps.LatLng(9.1021, 18.2812);
    
	map = new google.maps.Map(document.getElementById('map_canvas'), {
	   zoom: continent['NA'].zoom,
		disableDefaultUI: true,
	   center: continent['NA'].latLong,
	   mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
	
	map.panBy(-170, 0)
	

	
	for (i = 0; i < locations.length; i++) {  
	      var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][3], locations[i][2]),
	        map: map,
			icon: "i/pin.png"
	      });

	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infobox.setContent("<div class='infobox'><h3>" + locations[i][1] + "</h3><ul class='tags'><li>Museums</li><li>Entertainment</li><li>City break</li></ul></div>");
	          infobox.open(map, marker);
	        }
	      })(marker, i));
	
		google.maps.event.addListener(marker, 'dblclick', (function(marker, i) {
	        return function() {
	          infobox.close(map, marker);
	        }
	      })(marker, i));
		
			ids = locations[i][0] + i
			gmarkers[ids] = marker;
		
		  /*markerObj =   document.getElementById(locations[i][0] + i);
		  var location = locations[i][1];
		  google.maps.event.addDomListener(markerObj, 'mouseover', (function(marker) {
			  infobox.setContent("<div class='infobox'>" + location + "</div>");
	          infobox.open(map, marker);
		  }));
		
		google.maps.event.addDomListener(markerObj, 'mouseout', (function() {
	          infobox.close(map, marker);
		  }));*/
	
	    }

})

function openInfoBox(i) {
		currentMarker = i;
        google.maps.event.trigger(gmarkers[currentMarker], 'click');
		
    };

function closeInfoBox(i) {
	google.maps.event.trigger(gmarkers[i], 'dblclick');
};

var markerObj
var infowindow = new google.maps.InfoWindow();
var infobox;
infobox = new InfoBox({
         disableAutoPan: false,
         maxWidth: 150,
         pixelOffset: new google.maps.Size(-20, 0),
         zIndex: null,
         boxStyle: {
            background: "url('i/infobox-arrow.png') no-repeat",
            opacity: 0.75,
            width: "160px"
        },
        closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        infoBoxClearance: new google.maps.Size(1, 1)
    });



var i;
var locations = [
		// North America
		['NA', 'Atlantic City', -74.422928,39.364285],
		['NA','Austin', -97.743057,30.267153],
		['NA','Baltimore', -76.612190,39.290386],
		['NA','Boston', -71.059776,42.358433],
		['NA','Chicago', -87.629799,41.878113],
		['NA','Dallas', -96.769920,32.802956],
		['NA','Denver', -104.984718,39.737568],
		['NA','Honolulu', -157.858337,21.306944],
		['NA','Las Vegas', -115.172813,36.114647],
		['NA','Los Angeles', -118.243683,34.052235],
		['NA','Miami', -80.226440,25.788969],
		['NA','Minneapolis', -93.266670,44.983334],
		['NA','Montreal', -73.553993,45.508671],
		['NA','Nashville', -86.783333,36.166668],
		['NA','New Orleans', -80.226440,25.788969],
		['NA','New York', -74.005974,40.714352],
		['NA','Orlando', -81.379234,28.538336],
		['NA','Philadelphia', -75.163788,39.952335],
		['NA','Portland', -122.676208,45.523453],
		['NA','San Antonio', -98.493629,29.424122],
		['NA','San Francisco', -122.419418,37.774929],
		['NA','Seattle', -122.332069,47.606209],
		['NA','Vancouver', -123.113930,49.261227],
		['NA','Washington', -77.036369,38.895111],
	    // Europe
		['EU','Amsterdam', 4.895168,52.370216],
		['EU','Barcelona', 2.169919,41.387917],
		['EU','Berlin', 13.406091,52.519173],
		['EU','Birmingham', 1.9100, 52.4800],
		['EU','Brussels', 4.351710,50.850342],
		['EU','Budapest', 19.040758,47.498405],
		['EU','Cardiff', -3.179090,51.481583],
		['EU','Cologne', 6.960279,50.937531],
		['EU','Copenhagen', 12.568337,55.676098],
		['EU','Dublin', -6.260082,53.349442],
		['EU','Edinburgh', -3.188267,55.953251],
		['EU','Florence', 11.248001,43.771034],
		['EU','Geneva', 6.142296,46.198391],
		['EU','Kraków', 19.944981,50.064651],
		['EU','Lisbon', -9.150036,38.725300],
		['EU','London', -0.127683, 51.507336],
		['EU','Lyon', 4.835659,45.764042],
		['EU','Madrid', -3.6833,40.4000],
		['EU','Malaga', -4.420016,36.719646],
		['EU','Mallorca', 3.017571,39.695263],
		['EU','Manchester', -2.247926, 53.479252],
		['EU','Milan', 9.186516,45.465454],
		['EU','Munich', 11.577085,48.136608],
		['EU','Oslo', 10.752245,59.913868],
		['EU','Paris', 2.352222,48.856613],
		['EU','Prague', 14.437801,50.075539],
		['EU','Rome', 12.5000,41.9000],
		['EU','Stockholm', 18.0700,59.3300],
		['EU','Valencia', -0.376805,39.470238],
		['EU','Venice', 6.960279,50.937531],
		['EU','Vienna', 16.373819,48.208176],
		['EU','Zurich', 8.539182,47.368649],
		// South America
		['SA','Acapulco', -99.881615,16.863794],
		['SA','Buenos Aires', -58.381592,-34.603722],
		['SA','Cancún', -86.845940,21.158964],
		['SA','Curacou', -69.0000,12.1833],
		['SA','Mexico City', -99.133209,19.432608],
		['SA','Panama', -79.518791,8.994269],
		['SA','Puerto Vallarta', -105.228455,20.622019],
		['SA','Rio de Janeiro', -43.209587,-22.903540],
		['SA','Sao Paulo', -46.638817,-23.548943],
		// Asia
		['ASIA','Bali', 115.188919,-8.409518],
		['ASIA','Bangkok', 100.493889,13.752222], 
		['ASIA','Beijing', 116.407410,39.904213],
		['ASIA','Boracay', 121.926506,11.963376],
		['ASIA','Busan', 129.075638,35.179554], 
		['ASIA','Cebu', 123.885437,10.315699],
		['ASIA','Chengdu', 104.064857,30.658602],
		['ASIA','Chennai', 80.249580,13.060422],
		['ASIA','Chiang Mai', 98.660057,18.796465],
		['ASIA','Chongqing', 106.551559,29.563009],
		['ASIA','Dubai', 55.307484,25.271139],
		['ASIA','Goa', 74.123993,15.299326],
		['ASIA','Guilin', 110.290192,25.273565],
		['ASIA','Hangzhou', 120.155067,30.274090],
		['ASIA','Hanoi', 105.849998,21.033333],
		['ASIA','Ho Chi Minh City', 135.768036,35.011635],
		['ASIA','Hong Kong', 114.158058,22.281944],
		['ASIA','Hua Hin', 99.678688,12.492948],
		['ASIA','Hyderabad', 78.486671,17.385044],
		['ASIA','Jaipur', 75.787285,26.912416],
		['ASIA','Jakarta', 106.845169,-6.211544],
		['ASIA','Kaohsiung City', 120.666000,23.010872],
		['ASIA','Kolkata', 88.363892,22.572645],
		['ASIA','Krabi', 99.101349,8.119181],
		['ASIA','Kuala Lumpur', 99.854721,6.323300],
		['ASIA','Kuching', 110.344223,1.530976],
		['ASIA','Kyoto', 135.768036,35.011635],
		['ASIA','Manila', 120.984222,14.599512], 
		['ASIA','Mumbai', 72.877655,19.075983],
		['ASIA','Osaka', 135.502167,34.693737],
		['ASIA','Pattaya', 100.875275,12.927500],
		['ASIA','Penang', 100.484627,5.263234],
		['ASIA','Phnom Penh', 123.885437,10.315699], 
		['ASIA','Phuket', 98.330750,7.984311],
		['ASIA','Sanya', 109.511909,18.252848],
		['ASIA','Sapporo', 141.354370,43.062096],
		['ASIA','Seoul', 126.977966,37.566536],
		['ASIA','Shanghai', 121.473701,31.230392],
		['ASIA','Shenzhen', 114.057869,22.543098],
		['ASIA','Siem Reap', 104.865891,11.405324],
		['ASIA','Singapore', 103.851097,1.279287],
		['ASIA','Taipei', 121.559837,25.091076],
		['ASIA','Tokyo', 139.7667,35.6833],
		['ASIA','Udaipur', 73.691544,24.571270],
		['ASIA','Vientiane', 102.614426,17.962769],
		['ASIA','Xi&#39;an', 113.228874,39.373787],
		['ASIA','Xiamen', 118.089417,24.479836],
		// Africa
		['AF','Cape Town', 18.424055,-33.924870],
		//Aus + NZ
		['AUS','Adelaide', 138.599960,-34.928619],
		['AUS','Auckland', 174.763336,-36.848461],
		['AUS','Brisbane', 153.023453,-27.471010],
		['AUS','Cairns', 145.770859,-16.923979],
		['AUS','Canberra', 149.124222,-35.308235],
		['AUS','Christchurch', 172.636230,-43.532055],
		['AUS','Darwin', 130.841766,-12.462820], 
		['AUS','Fiji', 178.441895,-18.141600],
		['AUS','Gold Coast', 153.425705,-28.017262],
		['AUS','Hobart', 147.323822,-42.881905],
		['AUS','Melbourne', 144.971832,-37.811367],
		['AUS','Perth', 115.861938,-31.932854],
		['AUS','Port Douglas', 145.465836,-16.483978],
		['AUS','Queenstown', 168.6453,-45.0428],
		['AUS','Sydney', 151.206985,-33.867489], 
		['AUS','Wellington', 174.776230,-41.286461]		
];
