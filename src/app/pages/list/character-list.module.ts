import { SharedModule } from './../../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { CharacterComponent } from './character/character.component';
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
    RouterModule,
    ListRoutingModule,
    SharedModule
  ]
})
export class CharacterListModule { }
