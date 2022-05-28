
import { ICharacters } from './../../../pages/list/characters.models';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public character?: ICharacters;
  @Input() public editMode: boolean = true;

  public characterForm?: FormGroup;
  constructor(
    private CharactersService: CharactersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: new FormControl(this.character ? this.character.name : '', [
        Validators.required,
      ]),
      image: new FormControl(this.character ? this.character.image : '', [
        Validators.required,
      ]),
      alias: new FormControl(this.character ? this.character.alias : '', [
        Validators.required,
      ]),
      faction: new FormControl(this.character ? this.character.faction : '', [
        Validators.required,
      ]),
    });
  }
  public saveCharacter() {
    const formValue = this.characterForm?.value;
    const characterAdd$ =
      this.editMode && this.character
        ? this.CharactersService.editCharacter(this.character.id, formValue)
        : this.CharactersService.addCharacter(formValue);
    characterAdd$.subscribe(() => {
      this.router.navigate(['list']);
    });
  }
}
