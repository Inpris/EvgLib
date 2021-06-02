import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-control-value-accessor',
  templateUrl: './checkbox-control-value-accessor.component.html',
  styleUrls: ['./checkbox-control-value-accessor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  @Input() public disabled: boolean = false;

  public controlId: string;
  public checked: boolean = false;

  constructor(private _cd: ChangeDetectorRef) {
    this.controlId = 'сheckbox' + CheckboxControlValueAccessorComponent.idCounter++;
  }

  private _propagateChange: (...args) => any;
  private _onTouchedCallback: () => any;

  public writeValue(value: any) {
    this.checked = !!value;
  }

  public registerOnChange(fn: any) {
    this._propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
  // Справка: registerOnChange и registerOnTouched - эти функции мы обязаны реализовать, так как мы имплементим ControlValueAccessor

  public onChange(event): void {
    this.checked = event.target.checked;
    // Справка: target.value - значение элемента DOM (справедливо для полей формы)
    this._propagateChange(event.target.checked);
  }
}
