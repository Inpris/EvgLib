import {
  Component,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
})
export class CheckboxComponent {

  @Input() public disabled: boolean = false;
  @Output() checkTrue = new EventEmitter<any>();

  public checkmark: boolean = false;

  public checkmarkClick(): void {
    this.checkmark = !this.checkmark;
    this.checkTrue.emit(this.checkmark);
  }
}
