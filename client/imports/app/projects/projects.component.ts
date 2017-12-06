import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import template from './projects.component.html';
import style from './projects.component.scss';
import { Project } from './projects';
import "../../../../node_modules/materialize-css/dist/js/materialize.js";
declare var $:any;
declare var moment:any;

@Component({
	selector: 'project',
	template,
	styles: [ style ]
})
export class ProjectComponent implements OnInit, OnDestroy {
	public projectSlug: string;
	public projects: Array<Project>;
	public project: Project;
	public autoplay;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		// Get the id of the project of the url
		this.route.params.forEach((params: Params) => {
			this.projectSlug = params['id'];
		});

		// Load all the projects into an array
		this.projects = [
			new Project('Flirt', 'Cloud Platform', '#262626', '2017', 'México', 'flirt',
				['Conceptualización', 'Desarrollo de Producto', 'Go to Market Strategy'],
				['/images/projects/flirt_1.jpg', '/images/projects/flirt_2.jpg', '/images/projects/flirt_3.jpg', '/images/projects/flirt_4.jpg', '/images/projects/flirt_5.jpg']),

			new Project('Valiara', 'Luxury Residential', '#262626', '2017', 'México', 'valiara',
				['Evaluación de Idea', 'Desarrollo de Producto', 'Identidad de Marca'],
				['/images/projects/valiara_1.jpg', '/images/projects/valiara_2.jpg', '/images/projects/valiara_3.jpg']),

			new Project('Kii', 'Internet Solutions', '#262626', '2016', 'México', 'kii',
				['Conceptualización', 'Desarrollo de Producto', 'Go to Market Strategy', 'Marketing Digital', 'Analytics'],
				['/images/projects/wdv_1.jpg', '/images/projects/wdv_2.jpg', '/images/projects/wdv_3.jpg']),

			new Project('New Fiction Films', 'Film Production Company', '#262626', '2017', 'México', 'new-fiction-films',
				['UI/UX', 'Back End', 'Front End'],
				['/images/projects/nf_1.jpg', '/images/projects/nf_2.jpg', '/images/projects/nf_3.jpg']),

			new Project('Iniciativa Luz', 'Big Data Platform', '#262626', '2017', 'México', 'iniciativa-luz',
				['Conceptualización', 'Identidad de Marca', 'Visualización de Datos'],
				['/images/projects/iniciativa_luz_1.jpg', '/images/projects/iniciativa_luz_2.jpg', '/images/projects/iniciativa_luz_3.jpg']),

			new Project('Luuma', 'Solar Energy', '#262626', '2017', 'México', 'luuma',
				['Conceptualización', 'Identidad de Marca', 'Go to Market Strategy'],
				['/images/projects/luuma_1.jpg', '/images/projects/luuma_2.jpg', '/images/projects/luuma_3.jpg', '/images/projects/luuma_4.jpg']),

			new Project('Navento', 'Booking Platform', '#262626', '2017', 'México', 'navento',
				['UI / UX'],
				['/images/projects/navento_1.jpg', '/images/projects/navento_2.png', '/images/projects/navento_3.jpg']),

			new Project('Dosal & Duclaud', 'Law Firm', '#262626', '2016', 'México', 'dosal-duclaud',
				['Conceptualización', 'Desarrollo de Producto', 'Identidad', 'Go to Market Strategy'],
				['/images/projects/dd_1.jpg', '/images/projects/dd_3.jpg', '/images/projects/dd_4.jpg']),

			new Project('Fitry', 'Footwear Augmented Reality', '#262626', '2017', 'México', 'fitry',
				['Identidad de Marca'],
				['/images/projects/fitry_1.jpg', '/images/projects/fitry_2.jpg', '/images/projects/fitry_3.jpg'])
		];
	}

	ngOnInit() {
		// Get the project by the slug
		this.project = null;
		switch(this.projectSlug) {
		    case 'flirt': this.project = this.projects[0]; break;
		    case 'valiara': this.project = this.projects[1]; break;
		    case 'kii': this.project = this.projects[2]; break;
		    case 'new-fiction-films': this.project = this.projects[3]; break;
		    case 'iniciativa-luz': this.project = this.projects[4]; break;
		    case 'luuma': this.project = this.projects[5]; break;
		    case 'navento': this.project = this.projects[6]; break;
		    case 'dosal-duclaud': this.project = this.projects[7]; break;
		    case 'fitry': this.project = this.projects[8]; break;
		}

		// Handle nonexistent project
		if (this.project) {
			// Get the carousel
			var slider = $('#project-carousel');

			// Add the project's images
			for (var i = 0; i < this.project.photos.length; i++) {
				slider.append('<div class="carousel-item"><img src="' + this.project.photos[i] + '"></div>');
			}

			// Init the carousel
			slider.carousel({
				fullWidth: true,
				indicators: true
			});

			// Carousel autoplay
			this.autoplay = setInterval(() => {
				$('#project-carousel').carousel('next');
			}, 4000);
			// Stop the carousel autoplay when clicked on an indicator and re-enable it
			$('.indicator-item').click(() => {
				clearInterval(this.autoplay);
				this.autoplay = setInterval(() => {
					$('#project-carousel').carousel('next');
				}, 4000);
			});
		} else {
			// Strange bug, if you remove the next line it won't redirect on invalid project slug
			this.project = this.projects[0];
			this.redirect();
		}
	}

	ngOnDestroy() {
		// Stop the carousel autoplay
		clearInterval(this.autoplay);
	}

	redirect() {
		this.router.navigate(['/']);
	}
}