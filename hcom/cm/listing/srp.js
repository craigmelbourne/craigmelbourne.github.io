$(function(){
      			
				if (getParameterByName("destination")) {
					var dest = getParameterByName("destination");
					//fetch hotels from mobile API
					fetchHotelList(getParameterByName("destination"), displayHotels);
					//display loading message
					
					$("#header select").val(getParameterByName("destination"));
					$("#query h1").text(dest)
				} else {
					fetchHotelList("London, UK", displayHotels);
					$("#header select").val("London, UK");
					$("#query h1").text("London, UK");
				}

				$("#loading-hotels").show();

				$('#header select').on('change', function() {
					var url = window.location.href.split('?')[0] + "?destination=" + $(this).find('option:selected').val();
					window.location = url;
				});


			});

			var displayHotels = function (data) {
				// hide loading message
				$("#loading-hotels").hide();
			
				var hotels = data.result;
				console.log(hotels);
				
				// attach to handle bar template
        		var source   = $("#hotel-card").html();
  				var template = Handlebars.compile(source);
  				$("#hotels").html(template(hotels));
			}


			// Helpers 

			Handlebars.registerHelper("displayStarRating", function(starRating){
				var num = parseInt(Math.floor(starRating));
				var starsHTML = ""
				for (i = 0; i < num; i++) { 
    				starsHTML += "<img src='i/red_star.png' />"
				}

				return new Handlebars.SafeString(starsHTML);
			});

			Handlebars.registerHelper("displayNeighbourhood", function(locality){
				var neighbourhood = locality.split("/")
				return neighbourhood[0];
			});