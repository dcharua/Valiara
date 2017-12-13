import { Component,  OnInit  } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './imagenes.component.html';
import style from './imagenes.component.scss';
declare var $:any;

@Component({
	selector: 'imagenes',
	template,
	styles: [ style ]
})
export class ImagenesComponent implements OnInit{
	ngOnInit() {
	 $('.slider').slider();

	 $('.slider').slider('start');
		}

		nextSlide(){
			$('.slider').slider('next')
			$('.slider').slider('pause');
			$('.slider').slider('start');
		}
		prevSlide(){
			$('.slider').slider('prev');
			$('.slider').slider('pause');
			$('.slider').slider('start');
		}

	openNav(){
		$("div#city, div#logo").css({"display":"block"});
		$("div#over").css({"width":"100% "});
	}

}
