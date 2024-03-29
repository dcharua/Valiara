import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AmenititesComponent } from './amenitites/amenitites.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
    // Components, Pipes, Directive
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AmenititesComponent,
        DepartamentosComponent,
        ImagenesComponent,
        UbicacionComponent,
        ContactoComponent,
        OverlayComponent
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
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    // Main Component
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {

    }
}
