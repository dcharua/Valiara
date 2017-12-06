import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AmenititesComponent } from './amenitites/amenitites.component';


export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'amenitites', component: AmenititesComponent},
	{ path: '**', component: HomeComponent }
];
