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

  saveToLocal(movie: Movie): void {
    let existingList = [];
    existingList = JSON.parse(localStorage.getItem('movielist')) || [];
    existingList.push(movie);
    localStorage.setItem('movielist', JSON.stringify(existingList));
  }

  getFromLocal(): Movie[] {
    let existingList: Movie[];
    existingList = JSON.parse(localStorage.getItem('movielist'));
    return existingList;
  }

  alreadyExists(movie: Movie): boolean {
    let existingList = [];
    existingList = JSON.parse(localStorage.getItem('movielist')) || [];
    return existingList.includes(movie);
  }
}
