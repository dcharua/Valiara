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
      $("#imgmap").attr("src","/images/Ubicacion/Mapa_Angelopolis.jpg");
			$("#btnsin").removeClass('active');
			$("#btnang").addClass('active');
    }

		sinaloa() {
	      $("#imgmap").attr("src","/images/Ubicacion/Mapa_Parque_Sinaloa.svg");
				$("#btnsin").addClass('active');
				$("#btnang").removeClass('active');
	    }
}
