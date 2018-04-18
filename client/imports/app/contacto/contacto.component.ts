import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './contacto.component.html';
import style from './contacto.component.scss';
declare var $:any;

@Component({
	selector: 'contacto',
	template,
	styles: [ style ]
})
export class ContactoComponent {
	aboutOpen: boolean;
	slideCounter: number;

	constructor(){
		this.aboutOpen = false;
		this.slideCounter = 0;
	}

	openNav() {
		$("div#city, div#logo").css({"display":"block"});
		$("div#over").css({"width":"100% "});
	}

	openAviso() {
		$("div#privacidad").css({"height":"100%","display":"block"});
	}

	closeAviso() {
		$("div#privacidad").css({"height":"0%","display":"none"});
	}

	openCloseAbout(device) {
		var width = (device == 'mobile') ? '100%' : '70%';

		if (!this.aboutOpen){
			$("#courtain").css({"width": width});
			setTimeout(function(){ $('#courtain-content-wrapper').css('opacity', 1); }, 400);
		}
		else {
			$('#courtain-content-wrapper').css('opacity', 0);
			$("#courtain").css({"width": 0});
		}
		this.aboutOpen = !this.aboutOpen;
	}

	changeSlide(right) {
		var slides = document.getElementsByClassName("slide"); // Slides

		if (right) { // Derecha: Si estamos en el último slide, reiniciamos, else le sumamos uno
			this.slideCounter = ((this.slideCounter == slides.length - 1) ? 0 : this.slideCounter + 1);
		} else { // Izquierda: Si estamos en el primer slide, nos vamos al último, else le restamos uno
			this.slideCounter = ((!this.slideCounter) ? slides.length - 1 : this.slideCounter - 1);
		}
		$('.slide').css('opacity', '0');
		$(slides[this.slideCounter]).css('opacity', '1');
	}
}
