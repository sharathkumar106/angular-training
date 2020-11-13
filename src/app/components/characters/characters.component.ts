import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Characters[];
  charactersExist = true;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getCharacters().subscribe(response => {
      this.characters = response.data.results;
      this.charactersExist = this.characters.length > 0 ? true : false;
    });
  }

}
