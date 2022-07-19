import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MusicComponent } from "./components/music/music.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RatesComponent } from "./components/rates/rates.component";
import { SearchComponent } from "./components/search/search.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'musica', component: MusicComponent},
    {path: 'perfil', component: ProfileComponent},
    {path: 'buscar', component: SearchComponent},
    {path: '**', component: HomeComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);