import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public control: FormControl;
  @Input() public firstText = '';

  constructor(private _fb: FormBuilder) {}

  public changeRole(event): void {
    if (!this.disabled) {
      this.control.setValue(event.target.value, {
        onlySelf: true,
        emitEvent: false,
      });
    }
  }
}
