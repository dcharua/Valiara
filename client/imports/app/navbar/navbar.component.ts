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
							this.icons[5] = "HomeGris.svg";
							$('#logo-nav, #logo-mob').css('visibility', 'visible');
						}else{
							this.icons[5] = "HomeAmarillo.svg";
							$('#logo-nav, #logo-mob').css('visibility', 'hidden');
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
		document.getElementById("sidenav").style.width = "50%";
		$('.closebtn').removeClass('animated rotateOut');
		setTimeout(function() {
			$("div#links").css({"display":"block "})
		}, 300);
		;
	}

	closeNav() {
		$('.closebtn').addClass('animated rotateOut');
		// For mobile wait for the yellow strikethrough animation to complete before closing
			setTimeout(function() {
				document.getElementById("sidenav").style.width = "0";
				$("div#links").css({"display":"none "});
			}, 400);
	}

	toggleimg(op){
		if (op == 1)
			$('#logo-nav').attr("src","/logos/Logo_Blanco.svg");
		else
			$('#logo-nav').attr("src","/logos/Logo_Gris.svg");
	}
}
