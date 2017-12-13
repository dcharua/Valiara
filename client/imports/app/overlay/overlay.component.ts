import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import template from './overlay.component.html';
import style from './overlay.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'overlay}',
	template,
	styles: [ style ]
})
export class OverlayComponent  {
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

	closeNav() {
		$("div#over").css({"width":"0%"});
		$("div#city, div#contact, div#logo").css({"display":"none"});
	}

	openContact() {

		setTimeout(function() {
			$("div#city").css({"display":"none"});
			$("div#contact").css({"display":"block"});
			$("#CDMX, #Puebla").prop('checked', false);
		}, 400);
	}


}
