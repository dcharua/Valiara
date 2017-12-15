import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import template from './overlay.component.html';
import style from './overlay.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'overlay}',
	template,
	styles: [ style ]
})
export class OverlayComponent implements OnInit {
	addForm: FormGroup;
	public previousUrl: string;
	public city: boolean;

	constructor(
	  private formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this.city = true;
		this.addForm = this.formBuilder.group({
	      name: ['', Validators.required],
	      email:  ['', Validators.required],
	      phone: ['', Validators.required]
	    });
	}

	closeNav() {
		$("div#over").css({"width":"0%"});
		$("div#city, div#contact, div#logo, div#thank, #validate").css({"display":"none"});
	}

	openContact(opt) {
		if (opt ==1 )
			this.city = true;
		else
			this.city = false;

		setTimeout(function() {
			$("div#city").css({"display":"none"});
			$("div#contact").css({"display":"block"});
			$("#CDMX, #Puebla").prop('checked', false);
		}, 400);
	}

	 addTask(newTask) {
		 console.log(newTask);
		 console.log("in");
	 }

	sendMail(){
		 if (this.addForm.valid) {
			 if (this.city){
				Meteor.call(
				  'sendEmail',
					"sandydaguer@hotmail.com",
				 	this.addForm.controls.email.value,
					this.addForm.controls.name.value,
				  this.addForm.controls.phone.value
				);
				Meteor.call(
					'sendEmail',
					"garces_ventosa@hotmail.com",
					this.addForm.controls.email.value,
					this.addForm.controls.name.value,
					this.addForm.controls.phone.value
				);
			}else{
				Meteor.call(
				  'sendEmail',
					"bernardo@nexosin.com",
				 	this.addForm.controls.email.value,
					this.addForm.controls.name.value,
				  this.addForm.controls.phone.value
				);
			}
		this.addForm.reset();
			$("div#contact").css({"display":"none"});
			$("div#thank").css({"display":"block"});
	}else{
		$("#validate").css({"display":"block"});
		}
	}
}
