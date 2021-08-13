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
  @Input() public listData = [  // компонент будет работать, только если у объектав свойства записаны цифрами
    { 0: 1, 1: '1 месяц', 2: 700, 3: 'Купить'},
    { 0: 10, 1: '1 месяц', 2: 6500, 3: 'Зарегистрироваться'},
    { 0: 20, 1: '1 месяц', 2: 11000, 3: 'Зарегистрироваться'},
    { 0: 50, 1: '2 месяца', 2: 22500, 3: 'Зарегистрироваться'},
    { 0: 100, 1: '2 месяца', 2: 40000, 3: 'Зарегистрироваться'},
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
