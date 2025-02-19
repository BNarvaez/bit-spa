import { Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { EquipoComponent } from './components/equipo/equipo.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "main", component: MainComponent, title: 'Inicio' },
    { path: "equipo", component: EquipoComponent, title: 'Equipo' },
    {path: 'poke', component: PokeapiComponent,     title: 'PokeAPI'},
    { path: '**', component: PageNotFoundComponent, title: 'Error 404' },
];

