import { Component, HostListener, AfterViewInit, OnInit} from '@angular/core';
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
export class HomeComponent implements AfterViewInit,  OnInit {
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

	 checkScreenSize(){
		if($(window).width() < 1024) {
				$("#logohome").attr("src", "/logos/Logo_Blanco.svg");
		} else {
				$("#logohome").attr("src", "/logos/Logo_Gris.svg");
		}
 }

	openNav(){
		$("div#city, div#logo").css({"display":"block"});
		$("div#over").css({"width":"100% "});
	}

	ngOnInit(){
		 this.checkScreenSize();
	}
	ngAfterViewInit(){
	$(window).on("resize", function () {
		if($(window).width() < 1024) {
				$("#logohome").attr("src", "/logos/Logo_Blanco.svg");
		} else {
				$("#logohome").attr("src", "/logos/Logo_Gris.svg");
		}
	 });
 }

}
