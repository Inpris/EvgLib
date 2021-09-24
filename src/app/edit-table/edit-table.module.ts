import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTableComponent } from './edit-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from "../input/input.module";

@NgModule({
  declarations: [EditTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
  ],
  exports: [
    EditTableComponent
  ]
})
export class EditTableModule { }
