import { ICharacters } from '../../models/characters.models';
import { characters } from './character-list.config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{

  public characters: ICharacters[]= characters as ICharacters[];

  public characterCounter: number = 0;
  constructor() { }

  public selection(){
    this.characterCounter = this.characters.filter((character)=>{
      return character.isActive;
    }).length
  }}
