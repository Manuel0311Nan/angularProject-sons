import { ICharacters } from './../../models/characters.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent{

  @Input() public character?: ICharacters;
  @Output() public upDate: EventEmitter<void> = new EventEmitter();
  constructor() { }

  public font: boolean = true;

  public onDark(){
    if (this.character){
      this.character.isActive = !this.character.isActive;
      this.upDate.emit()
    }
  }
  }
