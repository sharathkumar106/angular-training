import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCastComponent } from './components/movie-cast/movie-cast.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'movies/:id', component: MovieCastComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
