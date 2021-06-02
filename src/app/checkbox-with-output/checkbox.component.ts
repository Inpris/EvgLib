import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() public disabled: boolean = false;
  @Output() public checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public checkmark: boolean = false;

  public checkmarkClick(): void {
    this.checkmark = !this.checkmark;

    this.checked.emit(this.checkmark);
  }
}
