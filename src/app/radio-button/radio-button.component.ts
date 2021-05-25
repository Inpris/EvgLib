import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {

  @Input() public disabled: boolean = false;
  // @Input() public options = [];
  @Input() frm: FormGroup;
  @Input() label: string;
  @Input() cn: string;
  @Input() value: string;
  @Input() id: string;
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  private _propagateChange = (_: any) => { };
  private _onTouchedCallback = () => {};

  writeValue(value: any) {
    if ((value !== undefined) && (value !== null)) {
      this.checked = value;
    }
  }

  registerOnChange(fn: any) {
    this._propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
  // Справка: registerOnChange и registerOnTouched - эти функции мы обязаны реализовать, так как мы имплементим ControlValueAccessor

  onChange() {
    // this.checked = event.target.checked;
    // Справка: target.value - значение элемента DOM (справедливо для полей формы)
    // this._propagateChange(event.target.checked);
  }

}
