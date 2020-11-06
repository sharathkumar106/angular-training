import { Movie } from './../movies/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieList: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}
