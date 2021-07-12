import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dropbox-div',
  templateUrl: './dropbox-div.component.html',
  styleUrls: ['./dropbox-div.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropboxDivComponent implements ControlValueAccessor {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public control: FormControl;
  @Input() public firstText: string = '';
  @Input() public value: string;

  private _propagateChange: (...args) => any;
  private _onTouchedCallback: () => any;
  public isSubmitted: boolean = false;

  constructor(private _fb: FormBuilder) {}

  writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }

    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }

    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }

  public show(): void {
    this.isSubmitted = !this.isSubmitted;
  }

  public setValue(event, itemName): void {
    if (this.disabled) {
      return;
    }

    this.firstText = itemName;
    this.isSubmitted = !this.isSubmitted;
  }
}
