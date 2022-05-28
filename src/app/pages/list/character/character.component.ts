import { ICharacters } from '../characters.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() public character?: ICharacters;
  @Output() public upDate: EventEmitter<void> = new EventEmitter();
  public currentCharacter$?: Observable<ICharacters>;

  constructor(
  ) {}

  ngOnInit(): void {
    console.log(this.character);
  }
  public font: boolean = true;

  public onDark() {
    if (this.character) {
      this.character.isActive = !this.character.isActive;
      this.upDate.emit();
    }
  }
}
