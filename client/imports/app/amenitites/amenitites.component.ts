import { Component, HostListener, AfterViewInit,  OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import template from './amenitites.component.html';
import style from './amenitites.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'amenitites',
	template,
	styles: [ style ]
})
export class AmenititesComponent implements OnInit{
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

	ngOnInit() {
	 $('.slider').slider();

	 $('.slider').slider('start');
		}

		nextSlide(){
			$('.slider').slider('next')
		}
		prevSlide(){
			$('.slider').slider('prev');
		}
		openMas(){
			$("div#verMas").css({"height":"100% "});
			$("div#mas").css({"display":"none "});
			$("div#verMasAfter").css({"display":"block"});
		}
		closeMas(){
			$("div#verMas").css({"height":"8% "});
			$("div#mas").css({"display":"block "});
			$("div#verMasAfter").css({"display":"none"});
		}

		openNav(){
			$("div#city, div#logo").css({"display":"block"});
			$("div#over").css({"width":"100% "});
		}
	}
