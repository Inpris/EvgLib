import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { SpinnerType } from '../spinner/spinner.component';

export type TButtonSize = 'small' | 'default' | 'large';
export type TButtonType = 'default' | 'primary' | 'dashed'| 'danger' | 'spinner';

// interface SpinnerSet { // создание объекта
//   spinnerType: string;
//   loading: boolean;
//   isSpinner: boolean;
// }

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() public type: TButtonType = 'primary';
  @Input() public size: TButtonSize = 'large';
  @Input() public isSpin: boolean = false;
  @Input() public disabled: boolean = false;

  public spinnerType: SpinnerType = 'one_speed_in_circle';

  public get className(): string {
    return `${this.disabled ? 'disabled-' : ''}${this.isSpin ? 'loading-' : ''}${this.type}-button__${this.size}`;
  }

  public get classSpinner(): string {
    return `spinner__${this.size}`;
  }

  public get classText(): string {
    return `${this.isSpin ? 'p-loading' : 'p'}`;
  }

  constructor() { }

  ngOnInit(): void {}

}
