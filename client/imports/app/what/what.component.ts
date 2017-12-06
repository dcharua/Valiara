import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import template from './what.component.html';
import style from './what.component.scss';
import { Element } from './element';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;

@Component({
	selector: 'what',
	template,
	styles: [ style ]
})
export class WhatComponent implements OnInit, OnDestroy {
	public elements: Array<Element>;
	public parallaxEl: Array<string>;
	public height: number;

	constructor() {
		this.elements = new Array();
		// Select the elements that need the parallax effect
		this.parallaxEl = new Array(
			'#wb-curvas',
			'#wb-personaje',
			'#wc-curvas',
			'#wc-personaje',
			'#wl-curvas-adelante',
			'#wl-curvas-atras',
			'#wl-personaje',
			'#wr-curvas',
			'#wr-personaje',
			'#wt-curvas-adelante',
			'#wt-curvas-atras',
			'#wt-personaje',
		);
		this.height = $(window).height();

		// Determine the name and scroll distance of each element for the parallax method
		var name, distance, speed, margin;
		for (var i = 0; i < this.parallaxEl.length; i++) {
			// Get the element name from the parallaxEl array
			name = this.parallaxEl[i];
			// We want the characters to move at different speed
			speed = 1;
			if (name.indexOf('personaje') != -1)
				speed = 0.5;
			// Based on the second letter of the element id, determine it's index ('b'elieve = 0, 'c'reate = 1, ...)
			// Formula used for the parallax effect calculation (Window height * index * velocity - margin offset)
			switch(this.parallaxEl[i][2]) {
			    case 'b':
			        distance = this.height * 0 * speed;
			        break;
			    case 'c':
			        distance = this.height * 1 * speed;
			        break;
			    case 'l':
			        distance = this.height * 2 * speed;
			        break;
			    case 'r':
			        distance = this.height * 3 * speed;
			        break;
			    case 't':
			        distance = this.height * 4 * speed;
			        break;
			}

			/* EXCEPTION */
			// For 'we launch', the background curve has a margin bottom of 140px
			// that we need to consider at the moment of applying the parallax effect.
			margin = 0;
			if (name == '#wl-curvas-atras')
				margin = 140;

			this.elements[i] = new Element(name, distance, speed, margin);
		}
	}

	ngOnInit() {
		// Section scrolling with fullpage.js: https://github.com/alvarotrigo/fullPage.js
		$('#content').fullpage({
			verticalCentered: false,
			scrollingSpeed: 1800,
			anchors:['believe-anchor', 'create-anchor', 'launch-anchor', 'remain-anchor', 'thrive-anchor'],
			menu: '#menu',
			navigation: true,
			lockAnchors: true,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			scrollBar: true,
			touchSensitivity: 10,
			fitToSectionDelay: 200,
			fitToSection: true
		});

		// Change the indicators color
		$('#fp-nav ul li a span').css('background', '#7A7A7A');
	}

	ngOnDestroy() {
		// Disable the fullpage plugin
		$.fn.fullpage.destroy('all');
	}

	@HostListener('window:scroll', ['$event']) onScrollEvent($event){
		// Apply the parallax effect: $(element).css('margin-bottom', $(window).scrollTop() * speed - distance + margin);
		var value;
		for (var j = 0; j < this.elements.length; j++) {
			value = Math.round($(window).scrollTop() * this.elements[j].speed - this.elements[j].distance + this.elements[j].margin);
			// With the Fullpage plugin, when a section starts scrolling the $(window).scrollTop() becomes 0 (we avoid that value)
			if ($(window).scrollTop())
				$(this.elements[j].name).css('margin-bottom', value);
		}
	}

    linkClick(selected) {
    	// Move to selected anchor link
		$.fn.fullpage.moveTo(selected);
    }

}