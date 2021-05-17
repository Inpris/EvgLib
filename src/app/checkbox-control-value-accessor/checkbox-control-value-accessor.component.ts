import {Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-control-value-accessor',
  templateUrl: './checkbox-control-value-accessor.component.html',
  styleUrls: ['./checkbox-control-value-accessor.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlValueAccessorComponent),
      multi: true
    }
  ]
})
export class CheckboxControlValueAccessorComponent implements ControlValueAccessor {
  static idCounter: number = 0;
  controlID: string;
  @Input() public disabled: boolean = false;
  checked: boolean = false;

  constructor() {
    this.controlID = 'сheckbox' + CheckboxControlValueAccessorComponent.idCounter++;
  }

  propagateChange = (_: any) => { };
  onTouchedCallback = () => {};

  writeValue(value: any) {
    if ((value !== undefined) && (value !== null)) {
      this.checked = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  // registerOnChange и registerOnTouched - эти функции мы обязаны реализовать, так как мы имплементим ControlValueAccessor

  onChange(event) {
    this.checked = event.target.checked;
    // target.value - значение элемента DOM (справедливо для полей формы)
    this.propagateChange(event.target.checked);
  }
}
