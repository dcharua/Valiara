import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WhereComponent } from './where/where.component';
import { ProjectComponent } from './projects/projects.component';
import { ErrorComponent } from './error/error.component';

export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'who', component: WhoComponent},
	{ path: 'what', component: WhatComponent},
	{ path: 'where', component: WhereComponent },
	{ path: 'project/:id', component: ProjectComponent },
	{ path: '**', component: HomeComponent }
];