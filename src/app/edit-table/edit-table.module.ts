import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTableComponent } from './edit-table.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EditTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditTableComponent
  ]
})
export class EditTableModule { }
