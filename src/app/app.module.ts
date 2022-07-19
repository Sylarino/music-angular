import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { routing, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    SearchComponent,
    ProfileComponent,
    RatesComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
