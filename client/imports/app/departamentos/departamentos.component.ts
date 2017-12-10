import { Component,  OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './departamentos.component.html';
import style from './departamentos.component.scss';
declare var $:any;

@Component({
	selector: 'departamentos',
	template,
	styles: [ style ]
})
export class DepartamentosComponent  implements OnInit{
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
			$("div#mas").css({"display":"none "});
			$("div#verMasAfter").css({"display":"block"});
			$("div#verMas").css({"height":"100% "})
		}
		closeMas(){
			$("div#verMasAfter").css({"display":"none "});
			$("div#mas").css({"display":"block "});
			$("div#verMas").css({"height":"10% "})
		}
}
