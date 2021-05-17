import { Component, /*Input,*/ Renderer2, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-control-value-accessor',
  templateUrl: './checkbox-control-value-accessor.component.html',
  styleUrls: ['./checkbox-control-value-accessor.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  static idCounter: number = 0;
  controlID: string;
  // @Input() checked: boolean;
  checked: boolean;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.controlID = 'myCheckbox' + CheckboxComponent.idCounter++;
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

  onChange(event) {
    this.checked = event.target.checked;
    this.propagateChange(event.target.checked);
  }
}
