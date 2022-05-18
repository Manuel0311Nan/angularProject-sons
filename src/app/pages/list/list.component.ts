import { ICharacters } from './characters.models';
import { characters } from './character-list.config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{

  public characters: ICharacters[]= characters as ICharacters[];
  public filteredCharacters: ICharacters[] = this.characters;
  public filterValueName: string = "";
  public filterValueFaction: string = "";
  public characterCounter: number = 0;
  constructor() { }

  // ngOnInit(): void {
  // }
  public selection(){
    this.characterCounter = this.characters.filter((character)=>{
      return character.isActive;
    }).length
  }
  public onFilter1() {
      this.filteredCharacters = this.characters.filter(character => {
        return character.alias.toLowerCase().includes(this.filterValueName.toLowerCase());
      });
    }
      public onFilter2() {
      this.filteredCharacters = this.characters.filter(character => {
        return character.faction.toLowerCase().includes(this.filterValueFaction.toLowerCase());
      });
  }}
