import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerButtonComponent } from './spinner-button.component';
import {ButtonModule} from '../button.module';
import {SpinnerModule} from '../../spinner/spinner.module';



@NgModule({
  declarations: [SpinnerButtonComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SpinnerModule,
  ],
  exports: [
    SpinnerButtonComponent,
  ],
})
export class SpinnerButtonModule { }
