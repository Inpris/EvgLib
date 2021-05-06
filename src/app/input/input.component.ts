import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Каждый созданный компонент, который будет использоватьтся, как formControl
// должен реализовать в себе ControlValueAccessor и в провайдерах иметь NG_VALUE_ACCESSOR.

// provide: NG_VALUE_ACCESSOR, - говорим Ангуляр, что наш компонент есть контрол,
// который можно использовать в реактивных формах

// useExisting: forwardRef(() => InputComponent), - ссылка на этот самый компонент для Ангуляр
// forwardRef нужен для того, чтобы избежать ошибок, ибо ссылка на компонент идет до того, как компонент описан

// writeValue - функция, которая вызывается, когда привязывается formControl
// в аргументе принимает значение control-a

// public registerOnChange(fn: (...args) => any): void {
//   this._changeFn = fn;
// }
//
// public registerOnTouched(fn: (...args) => any): void {
//   this._touchedFn = fn;
// }
// Эти функции мы обязаны реализовать, так как мы иимплементим ControlValueAccessor
// Ctrl + ЛКМ по ControlValueAccessor - перекинет на этот класс, где видно, какие функции должны быть реализованы
// в классе

// _changeFn - вызываем, когда хотим прокинуть наше значение наружу, то есть, чтобы из компонента изменить привязыннай к нему formControl

// fromEvent(this.input.nativeElement, 'input') - аналог addEventListener из rxJs, более удобен

// Проце всего проверить как это работает:
// Я в app-component создал app-input и просто div для отображения значения
// к инпуту привязан formControl (<app-input [formControl]="control"></app-input>)
// когда компонент инициализируется - у него сработает writeValue и запишется значение, которое было в formControl
// если первоначально сделать public control: FormControl = this._fb.control('Вася'); - инпуте со старта будет текст "Вася"
// когда вводишь значение в инпут -
// здесь на 110 строке сработает this._changeFn с введенным значением и твой текст передастся в formControl

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @ViewChild('input', { read: ElementRef }) public input: ElementRef;

  @Input() public disabled: boolean = false;

  private _inputText: string = '';
  private _destroyed$: Subject<void> = new Subject();

  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor() {}

  public ngAfterViewInit() {
    this._initControlValue();
  }

  public ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public writeValue(text: string): void {
    this._inputText = text;
  }

  public registerOnChange(fn: (...args) => any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: (...args) => any): void {
    this._touchedFn = fn;
  }

  public stopEnter(event): void {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  private _initControlValue(): void {
    this.input.nativeElement.innerText = this._inputText;

    fromEvent(this.input.nativeElement, 'input')
      .pipe(takeUntil(this._destroyed$))
      .subscribe((event: InputEvent) => {
        const text: string = (event.target as HTMLInputElement).innerText;

        this._changeFn(text);
      });
  }
}
