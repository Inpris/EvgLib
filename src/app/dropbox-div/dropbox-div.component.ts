import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dropbox-div',
  templateUrl: './dropbox-div.component.html',
  styleUrls: ['./dropbox-div.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropboxDivComponent),
      multi: true
    }
  ]
})
export class DropboxDivComponent implements ControlValueAccessor {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public firstText: string = '';

  public isSubmitted: boolean = false;
  private _dropdown_value: string = ''; // выбранное значение
  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor(private _fb: FormBuilder) {}

  public writeValue(text: string): void {
    this._dropdown_value = text;
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public show(): void {
    this.isSubmitted = !this.isSubmitted;
  }

  public setValue(itemName): void {
    if (this.disabled) {
      return;
    }

    this._dropdown_value = itemName;
    console.log('DROPDOWN_DIV_VALUE = ', itemName);
      // Справка: target.value - значение элемента DOM (справедливо для полей формы)
    this._changeFn(itemName);

    this.firstText = itemName;
    this.isSubmitted = !this.isSubmitted;
  }

}
