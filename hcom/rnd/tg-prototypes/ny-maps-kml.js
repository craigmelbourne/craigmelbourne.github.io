					
					

$(document).ready(function () {
	var latLng = new google.maps.LatLng(40.76025, -73.98478);
	 var homeLatLng = new google.maps.LatLng(40.76025, -73.98478);
	var markerImage = new google.maps.MarkerImage('images/marker.png',

	        // This marker is 129 pixels wide by 42 pixels tall.

	        new google.maps.Size(129, 42),

	        // The origin for this image is 0,0.

	        new google.maps.Point(0,0),

	        // The anchor for this image is the base of the flagpole at 18,42.

	        new google.maps.Point(18, 42)
	    );


		var kmlOptions = {
			suppressInfoWindows: true, 
			preserveViewport: true
		}

		var ctaLayer = new google.maps.KmlLayer('http://dl.dropbox.com/u/1756672/prototypes/hcom/maps/westvillage.kml', kmlOptions);
		

	 var map = new google.maps.Map(document.getElementById('map_canvas'), {
	   zoom: 11,
	   center: latLng,
	   mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
	
	ctaLayer.setMap(map);

// Broadway - Times Square 
	

	  var marker = new MarkerWithLabel({
	   position: homeLatLng,
	   draggable: false,
	   map: map,
	   icon: markerImage,
	   labelContent: "1",
	   labelAnchor: new google.maps.Point(0, 0),
	   labelClass: "labels", // the CSS class for the label
	   labelStyle: {opacity: 0.75}
	 });


// Midtown West

	
	var marker4 = new MarkerWithLabel({
   		position: new google.maps.LatLng(40.75537, -73.997),
   		draggable: false,
   		map: map,
		icon: markerImage,
   		labelContent: "2",
   		labelAnchor: new google.maps.Point(20, 0),
   		labelClass: "labels", // the CSS class for the label
   		labelStyle: {opacity: 0.75}
 	});

	
	/* ---------------------- */


// Upper East Side
	
	var marker7 = new MarkerWithLabel({
   		position: new google.maps.LatLng(40.77057, -73.95842),
   		draggable: false,
   		map: map,
		icon: markerImage,
   		labelContent: "3",
   		labelAnchor: new google.maps.Point(0, 0),
   		labelClass: "labels", // the CSS class for the label
   		labelStyle: {opacity: 0.75}
 	});
	
	var marker3 = new MarkerWithLabel({
	   position: new google.maps.LatLng(40.75271, -73.97297),
	   draggable: false,
	   map: map,
	icon: markerImage,
	   labelContent: "7",
	   labelAnchor: new google.maps.Point(0,0),
	   labelClass: "labels", // the CSS class for the label
	   labelStyle: {opacity: 0.75}
	 });
	

	
	var marker5 = new MarkerWithLabel({
	   position: new google.maps.LatLng(40.705327, -74.00725),
	   draggable: false,
	   map: map,
	icon: markerImage,
	   labelContent: "4",
	   labelAnchor: new google.maps.Point(20, 30),
	   labelClass: "labels", // the CSS class for the label
	   labelStyle: {opacity: 0.75}
	 });
	
	var marker6 = new MarkerWithLabel({
	   position: new google.maps.LatLng(40.78236, -73.98054),
	   draggable: false,
	   map: map,
	icon: markerImage,
	   labelContent: "5",
	   labelAnchor: new google.maps.Point(0, 0),
	   labelClass: "labels", // the CSS class for the label
	   labelStyle: {opacity: 0.75}
	 });


	
	var marker8 = new MarkerWithLabel({
	   position: new google.maps.LatLng(40.721021, -74.004179),
	   draggable: false,
	   map: map,
	icon: markerImage,
	   labelContent: "8",
	   labelAnchor: new google.maps.Point(0, 20),
	   labelClass: "labels", // the CSS class for the label
	   labelStyle: {opacity: 0.75}
	 });
	
	var marker9 = new MarkerWithLabel({
	   position: new google.maps.LatLng(40.73827, -73.98566),
	   draggable: false,
	   map: map,
	icon: markerImage,
	   labelContent: "6",
	   labelAnchor: new google.maps.Point(0,-40 ),
	   labelClass: "labels", // the CSS class for the label
	   labelStyle: {opacity: 0.75}
	 });

/*	 var heatmap = new google.maps.visualization.HeatmapLayer({
	  data: heatmapData
	});
	heatmap.setMap(map);
	
	heatmap.setOptions({
	      gradient: hGradient,
		      radius: 20,
			  dissipating: true
	}); */
	
	
	




	
})








var nyLandmarks = [
  ['Empire State Building', 40.748433, -73.985655, 1]
];

var nyNeighbourhoods = [
	['Broadway - Times Square', 40.76025, -73.98478, 1],
	['Midtown East - Grand Central', 40.75271, -73.97297, 1],
	['Midtown West', 40.75537, -73.997, 1],
	['Wall Street - Financial District', 40.705327, -74.00725, 1],
	['Upper West Side', 40.78236, -73.98054, 1],
	['Upper East Side', 40.77057, -73.95842, 1],
	['SoHo - Tribeca', 40.721021, -74.004179, 1],
	['Union Square', 40.73827, -73.98566, 1],
	['Central Park', 40.77462, -73.96403, 1]
]





