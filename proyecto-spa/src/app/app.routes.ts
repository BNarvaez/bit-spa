import { Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { EquipoComponent } from './components/equipo/equipo.component';

export const routes: Routes = [
    { path: "main", component: MainComponent },
    { path: "equipo", component: EquipoComponent}
];

