import { Component,  OnInit, Input} from '@angular/core';
import template from './imagenes.component.html';
import style from './imagenes.component.scss';
import { NavbarComponent } from '../navbar/navbar.component';

declare var $:any;

@Component({
	selector: 'imagenes',
	template,
	styles: [ style ]
})
export class ImagenesComponent implements OnInit{


	ngOnInit() {
	 $('.slider').slider();
	  $('.materialboxed').materialbox();

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
