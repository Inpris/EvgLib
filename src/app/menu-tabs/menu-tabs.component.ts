import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MenuTabsComponent),
      multi: true
    }
  ]
})
export class MenuTabsComponent implements ControlValueAccessor {
  @Input() public disabled: boolean = false;
  @Input() public tabs = [];
  @Input() public valueName: string = '';

  public menuTabValue: string = ''; // выбранное значение
  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor() { }

  public writeValue(value: string): void {
    this.menuTabValue = value[this.valueName];
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public setValue(tab): void {
    console.log('menuTabValue = ', tab[this.valueName]);
    this._changeFn(tab);

    this.menuTabValue = tab[this.valueName];
  }
}
