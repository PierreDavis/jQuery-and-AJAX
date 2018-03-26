$(document).ready(function() {
    $.ajax({
    	url: "https://api.myjson.com/bins/2sadq?pretty=1", 
    	dataType: "json",
    	success: function(response) {
    		$.each(response.apartments, function(i, apartment) {

var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");

var listing = "<a href='#' id=" + apartment.id + " class='list-group-item " + apartmentClass + " listings " + " list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between><h4 class='mb-1'>"+ apartment.description +

"/" + apartment.bedrooms + "BR /" +  apartment.price  + "</h4></div>" + "<p class = 'mb-1'>" + apartment.neighborhood + "</p></a>";
			  $(".apartments").append(listing);   
			   

    		});
    	},
    	error: function(error)
    	{
    		console.log(error);
    	}
	});

	$(".filter").click(function() {
		$(".filter").removeClass("active");
		$(this).addClass("active");

		var city = $(this).attr("id");

		$(".listings").show();
		if (city !== "all") {
			$(".listings").not("." + city).css("display", "none");	
		}
		
	});

	$(document).on("click", ".listings", function(){
		var id = $(this).attr("id");
		$.ajax({
    		url: "https://api.myjson.com/bins/2sadq?pretty=1", 
    		dataType: "json",
    		success: function(response) {
    			var selectedApartment = $.grep(response.apartments, function(apartment){

    				return apartment.id == id;
    			})	
    			var address = selectedApartment[0].address;

    			window.open("https://maps.google.com/?q=" + address);
    		},
    		error: function(error){
    		console.log(error);
    		}
    	});

	});
});


