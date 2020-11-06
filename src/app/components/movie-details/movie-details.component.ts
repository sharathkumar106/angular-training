import { Movie } from './../movies/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  selectedMovie: Movie[] = [];
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('movieId');
    this.movie = this.movieService.getMovie(id);
    this.selectedMovie.push(this.movie);
  }
}
