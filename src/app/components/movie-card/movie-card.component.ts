import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './../movies/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieList: Movie[];
  isItemAdded = false;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.addValidate();
  }

  addtoWishList(event: MouseEvent, movie: Movie): void {
    this.movieService.saveToLocal(movie);
    event.stopPropagation();
  }

  addValidate(): void {
    const page = location.pathname;
    if (page === '/favourites') {
      this.isItemAdded = true;
    }
  }

}
