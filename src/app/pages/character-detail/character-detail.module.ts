import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CharacterDetailModule { }
