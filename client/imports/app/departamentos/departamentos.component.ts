import { Component,  OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './departamentos.component.html';
import style from './departamentos.component.scss';
import { Departamento } from './departamentos';
declare var $:any;

@Component({
	selector: 'departamentos',
	template,
	styles: [ style ]
})
export class DepartamentosComponent  implements OnInit{
	public departamentoSlug: string;
	public departamentos: Array<Departamento>;
	public departamento: Departamento;

	constructor(){
	this.departamentos = [
		new Departamento('Jardín:', '3', '3 completos', '129.5 m2', '26 m2', '155.5 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreA_GH1.png', '/images/Departamentos/Planos/TorreA_GH1.png', '/']),
		new Departamento('Terraza:','3', '3 completos', '129.5 m2', '13.5 m2', '143 m2','Estudio con opción de\nconvertir en recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreA_Tipo1.png', '/images/Departamentos/Planos/TorreA_Tipo1.png', '/images/Departamentos/Planos/TorreA_Tipo1_Con_Family.png']),
		new Departamento('Pisos:', '1', '1 1/2', '70 m2', '2', '70 m2','Cocina\nSala Comedor\nPatio de Lavado\n\n\n',
		['/images/Departamentos/Levantamientos/TorreA_Loft.png', '/images/Departamentos/Planos/TorreA_Loft_Planta_Baja.png','/images/Departamentos/Planos/TorreA_ Loft_Planta_Alta.png']),
		new Departamento('Jardín:', '3', '3 completos', '128 m2', '52 m2', '180 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreB_GH1.png', '/images/Departamentos/Planos/TorreB_GH1.png', '/']),
		new Departamento('Jardín:', '2', '2 completos', '105 m2', '23 m2', '128 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreB_GH2.png', '/images/Departamentos/Planos/TorreB_GH2.png', '/']),
		new Departamento('Jardín:', '3', '3 completos', '128 m2', '78 m2', '206 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreB_GH3.png', '/images/Departamentos/Planos/TorreB_GH3.png', '/']),
		new Departamento('Terraza:', '3', '3 completos', '128 m2', '20 m2', '148 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreB_Tipo1.png', '/images/Departamentos/Planos/TorreB_Tipo1.png', '/']),
		new Departamento('Terraza:', '2', '2 completos', '105 m2', '11.5 m2', '116.5 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreB_Tipo2.png', '/images/Departamentos/Planos/TorreB_Tipo2.png', '/']),
		new Departamento('Terraza:', '3', '3 completos', '128 m2', '29 m2', '157 m2','Estudio con opción de\nconvertirse en una\ntercer recámara\nCocina\nSala Comedor\nPatio de Lavado\n',
		['/images/Departamentos/Levantamientos/TorreB_Tipo3.png', '/images/Departamentos/Planos/TorreB_Tipo3.png', '/'])
	];
}

	ngOnInit() {
		this.departamento = this.departamentos[0];

		 $('.slider').slider();
		 $('.slider').slider('start');
		}

	switchDepartamentos(num){
		if (num==0){
			this.departamento = this.departamentos[0];
			$("#TIPO1A, #LOFTA" ).removeClass('active');
			$("#GH1A").addClass('active');
			$("div#btnbp").css({"visibility":"hidden"});
		}
		if (num==1){
			this.departamento = this.departamentos[1];
			$("#GH1A, #LOFTA" ).removeClass('active');
			$("#TIPO1A").addClass('active');
			$("div#btnbp").css({"visibility":"visible"});
			$('#estudio').text('Estudio')
			$('#recamara').text('Recamara')
		}
		if (num==2){
			this.departamento = this.departamentos[2];
			$("#TIPO1A, #GH1A" ).removeClass('active');
			$("#LOFTA").addClass('active');
			$("div#btnbp").css({"visibility":"visible"});
		 	$('#estudio').text('PB')
			$('#recamara').text('PA')
		}
	}

	switchDepartamentosB(num){
		if (num==1){
			this.departamento = this.departamentos[3];
			$("#GH2B, #GH3B, #TIPO1B, #TIPO2B, #TIPO3B").removeClass('active');
			$("#GH1B").addClass('active');
		}
		if (num==2){
			this.departamento = this.departamentos[4];
			$("#GH1B, #GH3B, #TIPO1B, #TIPO2B, #TIPO3B").removeClass('active');
			$("#GH2B").addClass('active');
		}
		if (num==3){
			this.departamento = this.departamentos[5];
			$("#GH1B, #GH2B, #TIPO1B, #TIPO2B, #TIPO3B").removeClass('active');
			$("#GH3B").addClass('active');
		}
		if (num==4){
			this.departamento = this.departamentos[6];
			$("#GH1B, #GH2B, #GH3B, #TIPO2B, #TIPO3B").removeClass('active');
			$("#TIPO1B").addClass('active');
		}
		if (num==5){
			this.departamento = this.departamentos[7];
			$("#GH1B, #GH2B, #GH3B, #TIPO1B, #TIPO3B").removeClass('active')
			$("#TIPO2B").addClass('active');
		}
		if (num==6){
			this.departamento = this.departamentos[8];
			$("#GH1B, #GH2B, #GH3B, #TIPO1B, #TIPO2B").removeClass('active');
			$("#TIPO3B").addClass('active');
		}
	}

	toggleImage(num){
		if (num==0){
			$("#imgbp").attr("src", this.departamento.planos[1]);
			$("#recamara" ).removeClass('active');
			$("#estudio").addClass('active');
		}else{
			$("#imgbp").attr("src", this.departamento.planos[2]);
			$("#estudio" ).removeClass('active');
			$("#recamara").addClass('active');
		}
	}

	toggleDepartamentos(app){
		if (app ==2){
			$("div#departamentosTA").css({"display":"none "});
			$("div#departamentosTB").css({"display":"block "});
			$("#torreB").addClass('activeh4');
			$("#torreA").removeClass('activeh4');
			this.departamento = this.departamentos[3];
			$("div#btnbp").css({"visibility":"hidden"});
		}else{
			$("div#departamentosTB").css({"display":"none "});
			$("div#departamentosTA").css({"display":"block "});
			$("#torreA").addClass('activeh4');
			$("#torreB").removeClass('activeh4');
			this.departamento = this.departamentos[0];
		}
	}


	toggleAcabados(opt){
		if (opt ==2){
			$("div#acabadosinfo").css({"display":"none "});
			$("div#departamentosinfo").css({"display":"block "});
			$("#departamentos").addClass('active');
			$("#acabados").removeClass('active');
		}else{
			$("div#acabadosinfo").css({"display":"block "});
			$("div#departamentosinfo").css({"display":"none "});
			$("#acabados").addClass('active');
			$("#departamentos").removeClass('active');
		}
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

	openNav() {
		$("div#over").css({"width":"100% "});
	}
}
