import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './navbar.component.html';
import style from './navbar.component.scss';
declare var $:any;

@Component({
	selector: 'navbar',
	template,
	styles: [ style ]
})
export class NavbarComponent {
	public url: string;

	constructor(private router: Router) {
	    router.events.subscribe(event => {
	        if (event instanceof NavigationStart){
	        	// In the home section, the navbar elements vary a lot
	        	if (event.url != '/' && event.url != 'who') {
					$('#logo-bolt-black').css('display', 'none');
					$('#rayo-negro').css('display', 'block');
					$('#logo-bolt-white').css('display', 'none');
					$('#burger-white').css('display', 'none');
					$('#burger-black').css('display', 'block');
					if ($(window).width() <= 600)
						$('#navbar').addClass('yellow-navbar');
				} else {
					$('#logo-bolt-black').css('display', 'block');
					$('#rayo-negro').css('display', 'none');
				}
	        }
	    });
	}

	openNav() {
		document.getElementById("sidenav").style.width = "100%";
		$('.closebtn').removeClass('animated rotateOut');
	}

	closeNav() {
		$('.closebtn').addClass('animated rotateOut');

		// For mobile wait for the yellow strikethrough animation to complete before closing
		if ($(window).width() <= 992) {
			setTimeout(function() {
				document.getElementById("sidenav").style.width = "0";
			}, 400);
		} else {
			document.getElementById("sidenav").style.width = "0";
		}
	}
}