import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditTableComponent),
      multi: true
    }
  ]
})
export class EditTableComponent implements ControlValueAccessor {
  static idCounter: number = 0;

  @Input() public disabled: boolean = false;
  @Input() public listHead = [ 'Количество рентгенов',  'Время действия',  'Стоимость, руб.',  'Ссылка на преобретение' ];
  @Input() public columnNumber: number = 2;
  @Input() public listData = [
    { amount: 1, time: '1 месяц', price: 700, link: 'Купить'},
    { amount: 10, time: '1 месяц', price: 6500, link: 'Зарегистрироваться'},
    { amount: 20, time: '1 месяц', price: 11000, link: 'Зарегистрироваться'},
    { amount: 50, time: '2 месяца', price: 22500, link: 'Зарегистрироваться'},
    { amount: 100, time: '2 месяца', price: 40000, link: 'Зарегистрироваться'},
  ];

  public editableValue = [];

  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor() { }

  public writeValue(value): void {
    this.editableValue = value;
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public setValue(item): void {
    console.log('editableValue = ', item);

    this._changeFn(item);
    this.editableValue = item;
  }

  public getRowId() {
    return 'row' + EditTableComponent.idCounter++;
  }
}
