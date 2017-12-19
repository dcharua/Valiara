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
							$('#burger').attr("src","/mobile/Iconos/hamburguesa_negra.svg");
							if($(window).width() < 550) {
				 			  	$('#navbar').css('background-color' , 'rgba(242, 242, 242, 0.9)')
				 			}
							this.icons[5] = "HomeGris.svg";
							$('#logo-nav, #logo-mob').css('visibility', 'visible');
							$("#home").removeClass('active');
						}else{
							if($(window).width() < 550) {
				 			  	$('#navbar').css('background-color' , 'transparent')
				 			}
							$('#burger').attr("src","/mobile/Iconos/hamburguesa_blanca.svg");
							this.icons[5] = "HomeAmarillo.svg";
							$('#logo-nav, #logo-mob').css('visibility', 'hidden');
							$("#home").addClass('active');
						}

						if (event.url == '/amenitites' ){
							this.icons[0] = "Amenities_Amarillo.svg"
							$("#amenitites").addClass('active');
						}else{
							this.icons[0] = "Amenities_Gris.svg"
							$("#amenitites").removeClass('active');
						}

						if (event.url == '/departamentos' ){
							this.icons[1] = "Departamentos_Amarillo.svg"
							$("#departamentos").addClass('active');
						}else{
							this.icons[1] = "Departamentos_Gris.svg"
							$("#departamentos").removeClass('active');
						}

						if (event.url == '/imagenes' ){
							this.icons[2] = "Imagenes_Amarillo.svg"
							$("#imagenes").addClass('active');
						}else{
							this.icons[2] = "Imagenes_Gris.svg"
							$("#imagenes").removeClass('active');
						}

						if (event.url == '/ubicacion' ){
							this.icons[3] = "Ubicacion_Amarillo.svg"
							$("#ubicacion").addClass('active');
						}else{
							this.icons[3] = "Ubicacion_Gris.svg"
							$("#ubicacion").removeClass('active');
						}

						if (event.url == '/contacto' ){
							this.icons[4] = "Contacto_Amarillo.svg"
							$("#contacto").addClass('active');
						}else{
							this.icons[4] = "Contacto_Gris.svg"
							$("#contacto").removeClass('active');
						}
					}
			});
	}


	openNav() {
		 if($(window).width() < 550) {
			 document.getElementById("sidenav").style.width = "100%";
		}else{
			document.getElementById("sidenav").style.width = "50%";
		}
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
			$('#logosrc').attr("src","/logos/Logo_Blanco.svg");
		else
			$('#logosrc').attr("src","/logos/Logo_Gris.svg");
	}

}
