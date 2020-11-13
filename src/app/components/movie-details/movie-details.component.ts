import { MarvelMovies } from './../movie/marvel.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  marvelMovie: MarvelMovies;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    // const id = this.activatedRoute.snapshot.paramMap.get('movieID');
    // this.movieService.getMovie(id).subscribe(response => {
    //   console.log(response);
    //   this.movie = response;
    // });

    const marvelId = this.activatedRoute.snapshot.paramMap.get('movieID');
    this.movieService.getMarvelMovie(marvelId).subscribe(response => {
      console.log(response);
      this.marvelMovie = response.data.results[0];
    })
  }
}
