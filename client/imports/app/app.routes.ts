import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AmenititesComponent } from './amenitites/amenitites.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';



export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'amenitites', component: AmenititesComponent},
	{ path: 'departamentos', component: DepartamentosComponent},
	{ path: 'imagenes', component: ImagenesComponent},
	{ path: 'ubicacion', component: UbicacionComponent},
	{ path: 'contacto', component: ContactoComponent},
	{ path: '**', component: HomeComponent }
];
