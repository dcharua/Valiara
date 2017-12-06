import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import template from './who.component.html';
import style from './who.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'who',
	template,
	styles: [ style ]
})
export class WhoComponent implements OnInit, OnDestroy {
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

	ngOnInit() {

		// Navbar white background for mobile
		if ($(window).width() <= 600 && (this.isInView($('#background-1')) || this.isInView($('#background-2')) || this.isInView($('#background-3')))) {
			$('#navbar').removeClass('mobile-navbar');
		}

		// Make the class full height
		$('.content-container').css('height', $(window).height());

		var slide = true;
  		var moveToContent = false;
  		var moveUp = false;
  		var sIndex = 0;
  		var aIndex = 0;
  		// Section scrolling with fullpage.js: https://github.com/alvarotrigo/fullPage.js
		$('#fullpage').fullpage({
			verticalCentered: false,
			scrollingSpeed: 700,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			controlArrows: false,
			scrollOverflow: true,
			lockAnchors: true,
			lazyLoading: true,
			paddingTop: '0',
			paddingBottom: '0',
			bigSectionsDestination: 'top',
			slidesNavigation: true,
			afterLoad: (anchorLink, index) => {
				// Disable the slide variable in the content section
				if (anchorLink == 'content-anchor')
					slide = false;
				else
					slide = true;

				switch (anchorLink) {
					case 'carousel-anchor': aIndex = 1; break;
					case 'content-anchor': aIndex = 2; break;
				}

				if ((sIndex == 0 || sIndex == 1) && aIndex == 1)
					this.navBarBlack();
				else if (sIndex == 2 && aIndex == 1)
					this.navBarWhite();
				else if (aIndex == 2)
					this.navBarDefault();
			},
			onLeave: (index, nextIndex, direction) => {
				// Avoid going up if you are in the first slide
				if (direction == 'up' && aIndex == 1 && sIndex == 0)
					return false;

				// If you are inside the carousel
				//console.log(direction, slide, sIndex);
				if (slide) {
					// Move to the next slide
					if (direction == 'down' && sIndex != 2) {
						$.fn.fullpage.moveSlideRight();
						return false;
					}
					// Move to the prev slide
					else if (direction == 'up' && sIndex != 0) {
						$.fn.fullpage.moveSlideLeft();
						return false;
					}
				}
			},
			afterSlideLoad: (anchorLink, index, slideAnchor, slideIndex) => {
				// Save the slide index in a global variable
				sIndex = slideIndex;

				//console.log(slideIndex);

				if (slideIndex == 0 || slideIndex == 1)
					this.navBarBlack();
				else if (slideIndex == 2)
					this.navBarWhite();
			}
		});

		// If the user goes back from a project, scroll directly to the content section
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(e => {
		    if (this.previousUrl.indexOf('project') != -1 && e.url == '/who') {
		    	// Because of the callbacks behaviour, we nedd to go to the last slide and then go to content in order
		    	$.fn.fullpage.silentMoveTo(2, 2);
				setTimeout(() => { $.fn.fullpage.silentMoveTo(3); this.navBarDefault(); }, 10);
		    } else if (e.url == '/who') {
		    	$.fn.fullpage.silentMoveTo(2, 2);
				setTimeout(() => { $.fn.fullpage.moveTo(3); this.navBarDefault(); }, 1000);
		    }
		    this.previousUrl = e.url;
		});
	}

	ngOnDestroy() {
		$.fn.fullpage.destroy('all');
	}

	// If some part of the elemenent is in the viewport
	isInView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	// Navbar with "bolt" as logo
	navBarBlack() {
		$('#logo-bolt-white').css('display', 'none');
		$('#logo-bolt-black').css('display', 'block');
		$('#rayo-negro').css('display', 'none');
		$('#burger-white').css('display', 'none');
		$('#burger-black').css('display', 'block');
		$('#navbar').removeClass('mobile-navbar');
	}

	// White navbar for the third slide
	navBarWhite() {
		$('#logo-bolt-white').css('display', 'block');
		$('#logo-bolt-black').css('display', 'none');
		$('#rayo-negro').css('display', 'none');
		$('#burger-white').css('display', 'block');
		$('#burger-black').css('display', 'none');
		$('#navbar').removeClass('mobile-navbar');
	}


	// Default navbar in every section
	navBarDefault() {
		$('#logo-bolt-black').css('display', 'none');
		$('#rayo-negro').css('display', 'block');
		$('#logo-bolt-white').css('display', 'none');
		$('#burger-white').css('display', 'none');
		$('#burger-black').css('display', 'block');
		if ($(window).width() <= 600)
			$('#navbar').addClass('mobile-navbar');
	}
}