import {
  ChangeDetectionStrategy,
  Component, forwardRef,
  Input,
  OnDestroy,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor, OnDestroy {

  // static idCounter: number = 0; // статические переменные не обнуляются: не инициализируются заново

  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public firstText: string = '';

  private dropdown_value: string = ''; // выбранное значение
  private _destroyed$: Subject<void> = new Subject();
  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor() {
    // this.controlId = 'dropdown' + DropdownComponent.idCounter++;
  }

  public writeValue(text: string): void {
    this.dropdown_value = text;
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public onChange(event): void {
     if (!this.disabled) {
      this.dropdown_value = event.target.value;
      console.log('DROPDOWN_VALUE = ', event.target.value);
      // Справка: target.value - значение элемента DOM (справедливо для полей формы)
      this._changeFn(event.target.value);
     }
  }
}
