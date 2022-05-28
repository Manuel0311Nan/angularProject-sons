import { EditCharacterComponent } from './edit-character.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCharacterRoutingModule } from './edit-character-routing.module';


@NgModule({
  declarations: [
    EditCharacterComponent
  ],
  imports: [
    CommonModule,
    EditCharacterRoutingModule,
    SharedModule
  ]
})
export class EditCharacterModule { }
