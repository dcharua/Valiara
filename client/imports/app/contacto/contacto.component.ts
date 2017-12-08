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
	openNav() {
		$("div#city").css({"width":"100% "});
		$("div#city").css({"height":"100% "});
	}

	closeNav() {
		$("div#city").css({"width":"0%"});
	}

	openContact() {
		$("div#city").css({"height":"0%"});
		$("div#contact").css({"width":"100%"});
	}

	closeContact() {
		$("div#contact").css({"width":"0%"});
	}
}
