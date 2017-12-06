import { Component, HostListener, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import template from './home.component.html';
import style from './home.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'home',
	template,
	styles: [ style ]
})
export class HomeComponent {
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

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
