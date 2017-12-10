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
	public icons: Array<String>;
	constructor(private router: Router) {
		this.icons = new Array();
			router.events.subscribe(event => {
					if (event instanceof NavigationStart){
						// In the home section, the navbar elements vary a lot
						if (event.url != '/' ) {
							$('#logo-nav').css('visibility', 'visible');
						}else{
								$('#logo-nav').css('visibility', 'hidden');
						}

						if (event.url == '/amenitites' ){
							this.icons[0] = "Amenities_Amarillo.svg"
						}else{
							this.icons[0] = "Amenities_Gris.svg"
						}

						if (event.url == '/departamentos' ){
							this.icons[1] = "Departamentos_Amarillo.svg"
						}else{
							this.icons[1] = "Departamentos_Gris.svg"
						}

						if (event.url == '/imagenes' ){
							this.icons[2] = "Imagenes_Amarillo.svg"
						}else{
							this.icons[2] = "Imagenes_Gris.svg"
						}

						if (event.url == '/ubicacion' ){
							this.icons[3] = "Ubicacion_Amarillo.svg"
						}else{
							this.icons[3] = "Ubicacion_Gris.svg"
						}

						if (event.url == '/contacto' ){
							this.icons[4] = "Contacto_Amarillo.svg"
						}else{
							this.icons[4] = "Contacto_Gris.svg"
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
