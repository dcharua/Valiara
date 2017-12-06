import { Component } from '@angular/core';
import template from './error.component.html';
import style from './error.component.scss';

@Component({
	selector: 'error',
	template,
	styles: [ style ]
})
export class ErrorComponent {
	public title: string;

	ngOnInit() {
		this.title = '404';
	}
}