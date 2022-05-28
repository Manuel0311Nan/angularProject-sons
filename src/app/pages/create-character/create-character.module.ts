import { CreateCharacterComponent } from './create-character.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharacterRoutingModule } from './create-character-routing.module';


@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    CreateCharacterRoutingModule,
    SharedModule
  ]
})
export class CreateCharacterModule { }
