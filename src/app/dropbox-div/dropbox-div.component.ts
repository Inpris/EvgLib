import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
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
export class DropboxDivComponent implements ControlValueAccessor, OnInit {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public firstText: string = '';
  @Input() public valueName: string = '';

  public isPushed: boolean = false;
  public dropdownValue: string = ''; // выбранное значение
  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  public ngOnInit() {
    if (this.dropdownValue === ''){
      this.dropdownValue = this.firstText;
      console.log('DROPDOWN_firstText = ', this.firstText);
      console.log('DROPDOWN_dropdownValue = ', this.dropdownValue);
    }
  }

  public writeValue(text: string): void {
    this.dropdownValue = text;
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public show(): void {
    this.isPushed = !this.isPushed;
  }

  public setValue(itemName): void {
    console.log('DROPDOWN_DIV_VALUE = ', itemName);
      // Справка: target.value - значение элемента DOM (справедливо для полей формы)
    this._changeFn(itemName);

    this.dropdownValue = itemName;
    this.isPushed = !this.isPushed;
  }

}
