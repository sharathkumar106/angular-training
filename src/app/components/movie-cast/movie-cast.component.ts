import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {

  cast: Characters[];
  castExist = true;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadcast();
  }

  loadcast(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getCast(id).subscribe(response => {
      this.cast = response.data.results;
      this.castExist = this.cast.length > 0 ? true : false;
    });
  }

}
