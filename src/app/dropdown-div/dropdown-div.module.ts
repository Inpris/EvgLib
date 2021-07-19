import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDivComponent } from './dropdown-div.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [DropdownDivComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownDivComponent,
  ]
})
export class DropdownDivModule { }
