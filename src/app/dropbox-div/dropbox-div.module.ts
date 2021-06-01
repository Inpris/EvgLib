import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropboxDivComponent } from './dropbox-div.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [DropboxDivComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DropboxDivComponent,
  ]
})
export class DropboxDivModule { }
