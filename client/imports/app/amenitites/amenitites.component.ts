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
		// Make the class full height (fix for the scrolling problem in safari and chorme with 100vh)
		$('.content-container').css('height', $(window).height());
		$('.content-container').css('width', $(window).width());


		$('#fullpage').fullpage({
			fullWidth: true,
			autoplay: true,
			scrollingSpeed: 700,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			controlArrows: true,
			scrollOverflow: true,
			paddingTop: '0',
			paddingBottom: '0',
			bigSectionsDestination: 'top',
			slidesNavigation: true
		});

		}
	}
