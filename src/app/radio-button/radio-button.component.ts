import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent implements ControlValueAccessor {
  static idCounter: number = 0;

  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public valueName: string = '';

  public radioValue: string = ''; // выбранное значение
  public radioId: string;
  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor() {
    this.radioId = 'radio' + RadioButtonComponent.idCounter++;
  }

  public writeValue(value: any) {
  }

  public registerOnChange(fn: any) {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any) {
    this._touchedFn = fn;
  }

  public onChange(event): void {
    console.log('RADIO_VALUE = ', event.target.value);
    // Справка: target.value - значение элемента DOM (справедливо для полей формы)
    this._changeFn(event.target.value);
  }
}
