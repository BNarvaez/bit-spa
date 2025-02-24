import { Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { EquipoComponent } from './components/equipo/equipo.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApiTerceroComponent } from './components/api-tercero/api-tercero.component';

export const routes: Routes = [
    {path: "tercero", component: ApiTerceroComponent, title: 'API Tercero'},
    { path: "equipo", component: EquipoComponent, title: 'Equipo' },
    { path: "main", component: MainComponent, title: 'Inicio' },
    {path: 'poke', component: PokeapiComponent,     title: 'PokeAPI'},
    {path: ''   , redirectTo: '/main', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent, title: 'Error 404' },
];

