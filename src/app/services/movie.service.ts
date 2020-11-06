import { MOVIES } from './../components/movies/mockmovies';
import { Movie } from './../components/movies/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return MOVIES;
  }

  getMovie(id: string): Movie {
    return MOVIES.find(movie => movie.id === id);
  }
}
