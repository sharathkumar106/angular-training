import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  youtubeLink = 'https://www.youtube.com/embed/';
  trailerLink = '';

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

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieList = this.movieService.getMovies();
  }

  addMovie(): void {
    this.movie.id = this.generateId();
    this.movie.trailerLink = this.youtubeLink + this.trailerLink;
    const tempMovie: Movie = { ...this.movie };
    this.movieList.unshift(tempMovie);
  }

  generateId(): string {
    return Math.floor(Math.random() * 900000 + 100000).toString();
  }
}
