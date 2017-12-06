import { Component, HostListener, OnInit} from '@angular/core';
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
export class HomeComponent implements OnInit {
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

	ngOnInit() {

		function openNav() {
				document.getElementById("myNav").style.height = "100%";
		}

		function closeNav() {
				document.getElementById("myNav").style.height = "0%";
		}

	}
}
