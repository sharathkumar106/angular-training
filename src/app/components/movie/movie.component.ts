import { MarvelMovies } from './marvel.model';
import { Movie } from './movie.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieList: Movie[];
  marvelMovies: MarvelMovies[];
  page = 1;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    // this.movieService.getMovies(this.page).subscribe(response => {
    //   console.log('Response: ', response);
    //   this.movieList = response.Search;
    // });

    this.movieService.getMarvelMovies().subscribe(response => {
      console.log('Response: ', response);
      this.marvelMovies = response.data.results;
    });
  }

  paginate(direction: number) {
    this.page += direction;
    this.loadMovies();
  }
}
