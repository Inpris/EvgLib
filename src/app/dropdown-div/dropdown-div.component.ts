import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dropbox-div',
  templateUrl: './dropdown-div.component.html',
  styleUrls: ['./dropdown-div.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownDivComponent),
      multi: true
    }
  ]
})
export class DropdownDivComponent implements ControlValueAccessor {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public firstText: string = '';
  @Input() public valueName: string = '';

  public isPushed: boolean = false;
  public dropdownValue: string = ''; // выбранное значение
  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor(private eRef: ElementRef) {
    console.log('no clicks yet');
  }

  public writeValue(value: string): void {
    this.dropdownValue = value[this.valueName];
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public changeVisibility(): void {
    this.isPushed = !this.isPushed;
  }

  public setValue(item): void {
    console.log('DROPDOWN_DIV_VALUE = ', item[this.valueName]);
    this._changeFn(item);

    this.dropdownValue = item[this.valueName];
    this.isPushed = !this.isPushed;
  }

  @HostListener('document:click', ['$event'])
  public clickOut(event) {
    if ( (this.isPushed === true) && !(this.eRef.nativeElement.contains(event.target)) ) {
      // this.isPushed = false;
      this.changeVisibility();
      console.log('clicked outside');
    }
  }
}
