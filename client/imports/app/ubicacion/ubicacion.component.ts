import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './ubicacion.component.html';
import style from './ubicacion.component.scss';
declare var $:any;

@Component({
	selector: 'ubicacion',
	template,
	styles: [ style ]
})
export class UbicacionComponent {
	angelopolis() {
    $("#imgmap, #imgmap-mob, #planofull").attr("src","/images/Ubicacion/Mapa_Angelopolis.jpg");
		$("#btnsin, #btnsin-mob").removeClass('active');
		$("#btnang, #btnang-mob").addClass('active');
  }

	sinaloa() {
      $("#imgmap, #imgmap-mob, #planofull").attr("src","/images/Ubicacion/Mapa_Parque_Sinaloa.svg");
			$("#btnsin, #btnsin-mob").addClass('active');
			$("#btnang, #btnang-mob").removeClass('active');
    }


		fullimg(){
			$("div#imgbig").css({"display":"block "});
		}

		closeimg(){
			$("div#imgbig").css({"display":"none "});
		}
}
