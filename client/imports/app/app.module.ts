import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WhereComponent } from './where/where.component';
import { ProjectComponent } from './projects/projects.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        WhoComponent,
        WhatComponent,
        WhereComponent,
        ProjectComponent,
        ErrorComponent
    ],
    // Entry Components
    entryComponents: [
        AppComponent
    ],
    // Providers
    providers: [
    ],
    // Modules
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    // Main Component
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {

    }
}
