import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxControlValueAccessorComponent } from './checkbox-control-value-accessor.component';



@NgModule({
  declarations: [CheckboxControlValueAccessorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CheckboxControlValueAccessorComponent
  ]
})
export class CheckboxControlValueAccessorModule { }
