import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropbox-div',
  templateUrl: './dropbox-div.component.html',
  styleUrls: ['./dropbox-div.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropboxDivComponent {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public control: FormControl;
  @Input() public firstText: string = '';
  @Input() public value: string;

  public isSubmitted: boolean = false;

  constructor(private _fb: FormBuilder) {}

  public show(): void {
    this.isSubmitted = !this.isSubmitted;
  }

  public setValue(event, itemName): void {
    if (this.disabled) {
      return;
    }

    this.firstText = itemName;
    this.isSubmitted = !this.isSubmitted;

    this.control.setValue(itemName);
  }
}
