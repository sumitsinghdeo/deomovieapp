import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PolpularMoviesComponent } from './polpular-movies/polpular-movies.component';
import { AppErrorHandler } from './app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
   HomeComponent,
    NavComponent,
    MovieDetailsComponent,
    PolpularMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   FormsModule,
   AppRoutingModule
  ],
  providers: [
    MovieService,
    {provide: ErrorHandler,useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
