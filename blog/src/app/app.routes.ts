import { Routes } from '@angular/router';
import { ListaComponent } from './post/lista/lista.component';
import { VerComponent } from './post/ver/ver.component';
import { ActualizarComponent } from './post/actualizar/actualizar.component';
import { CrearComponent } from './post/crear/crear.component';


export const routes: Routes = [
  { path: 'lista/:id', component: ListaComponent },
  { path: 'ver/:id', component: VerComponent },
  { path: 'crear/:id', component: CrearComponent },
  { path: 'actualizar/:id', component: ActualizarComponent },
  { path: '', component: ListaComponent },
  { path: '**', component: ListaComponent }
];