import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import template from "./app.component.html";
import style from "./app.component.scss";
declare var $:any;

@Component({
	selector: "app",
	template,
	styles: [ style ]
})
export class AppComponent implements OnInit, OnDestroy {
	public routerSub: Subscription;
	public previousUrl: string;

	constructor(
		private router: Router
	) {
		this.previousUrl = '.';
	}

	ngOnInit() {
		// Scroll to the top each time we visit a new url
		this.routerSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                window.scrollTo(0, 0);
            }
        });
	}

	ngOnDestroy() {
		this.routerSub.unsubscribe();
	}
}