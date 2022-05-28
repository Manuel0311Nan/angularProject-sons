import { Observable, switchMap } from 'rxjs';
import { ICharacters } from './../list/characters.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss'],
})
export class EditCharacterComponent implements OnInit {
  public character?: ICharacters;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['characterId'];
      this.characterService
        .getCharacterById(characterId)
        .subscribe((character?) => {
          this.character = character;
        });
    });
  }
}
