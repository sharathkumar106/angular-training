import { MovieService } from './../../services/movie.service';
import { MOVIES } from './mockmovies';
import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: '',
    title: '',
    year: '',
    imageURL: '',
    ratings: 0,
    trailerLink: '',
    description: ''
  };

  movieList: Movie[];

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieList = this.movieservice.getMovies();
  }

  addMovie(): void {
    this.movie.id = this.generateId();
    const tempMovie: Movie = { ...this.movie };
    this.movieList.unshift(tempMovie);
  }

  generateId(): string {
    return Math.floor(Math.random() * 900000 + 100000).toString();
  }
}
