import { RouterModule } from '@angular/router';
import { ListComponent } from './../list.component';
import { CharacterComponent } from './character.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CharacterModule { }
