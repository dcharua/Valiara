import { Component, OnInit } from '@angular/core';
import template from './where.component.html';
import style from './where.component.scss';
declare var $:any;
declare var google:any;
declare var moment:any;

@Component({
	selector: 'where',
	template,
	styles: [ style ]
})
export class WhereComponent implements OnInit {
	public time: Date;

  	ngOnInit() {
  		var geocoder = new google.maps.Geocoder();
  		var address = 'Bosque de Radiatas 32, Bosques de las Lomas'

  		// Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            zoom: 15,
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        };

        // Get the HTML DOM element that will contain your map 
        var mapElement = document.getElementById('map');
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        // Use the geocoder to work with address instead of coordinates
	    geocoder.geocode({
	      	'address': address
	    }, function(results, status) {
	      	if (status == google.maps.GeocoderStatus.OK) {
	          	map.setCenter(results[0].geometry.location);
	          	// Custom icon options
		        var icon = {
				    url: '/logos/rayo_bolt_negro.png',
				    scaledSize: new google.maps.Size(25, 25),
				    origin: new google.maps.Point(0,0),
				};
		        // Add the marker
		        var marker = new google.maps.Marker({
		            position: results[0].geometry.location,
		            map: map,
		            title: 'Bolt',
		            icon: icon
		        });
	      	} else {
	      		$('map').text("Google maps plugin isn't working, please contact the page administrator or write to hola@wearebolt.co: " + status + " -> " + results);
	      	}
	    });

	    // Modify the time with moment.js
	    this.time = moment().format('h:mm a');
  	}

  	mail() {
  		window.location.href = "mailto:emilio@wearebolt.co";
  	}
}