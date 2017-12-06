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
