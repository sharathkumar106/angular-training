import { Movie } from '../movies/movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.favourites = this.movieService.getFromLocal();
    console.log('this', this.favourites);
  }
}
