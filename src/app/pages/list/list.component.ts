import { CharactersService } from './../../core/services/characters/characters.service';
import { ICharacters } from './characters.models';
import { characters } from './character-list.config';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public characters: ICharacters[] = characters as ICharacters[];
  public filterValueName: string = '';
  public filterValueFaction: string = '';
  public page: number = 0;

  public characterCounter: number = 0;
  characterListApi: ICharacters[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }
  /*
  -------Filtrados en web-------
  */
  public selection() {
    this.characterCounter = this.characters.filter((character) => {
      return character.isActive;
    }).length;
  }
  // public onFilter1() {
  //     this.characters = this.characters.filter(character => {
  //       return character.alias.toLowerCase().includes(this.filterValueName.toLowerCase());
  //     });
  //   }
  public onFilter2() {
    this.characters = this.characters.filter((character) => {
      return character.faction
        .toLowerCase()
        .includes(this.filterValueFaction.toLowerCase());
    });
  }
  /*
    Lógica de la lista de characteres
    */
  private getCharacters() {
    this.charactersService
      .getCharacters()
      .subscribe((characters: ICharacters[]) => {
        this.characters = characters;
      });
  }
}
