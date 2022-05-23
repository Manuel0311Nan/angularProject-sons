import { ICharacters } from './../list/characters.models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

    public currentCharacter$?: Observable<ICharacters>;

    constructor(
      private activatedRoute: ActivatedRoute,
      private characterService: CharactersService
    ) {}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        const characterId = params['characterId'];
        this.currentCharacter$ = this.characterService.getCharacterById(characterId);
      });
    }

  }
