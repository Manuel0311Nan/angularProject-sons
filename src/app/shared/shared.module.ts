import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FilterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FilterComponent,
    FormComponent
  ]
})
export class SharedModule { }
