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

	openNav(){
		$("div#city, div#logo").css({"display":"block"});
		$("div#over").css({"width":"100% "});
	}

		openAviso(){
			$("div#privacidad").css({"height":"100%","display":"block"});
		}

		closeAviso(){
		$("div#privacidad").css({"height":"0%","display":"none"});
		}
}
