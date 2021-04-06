import { Component, Input, OnInit } from '@angular/core';
import { SpinnerType } from '../spinner/spinner.component';

export type TButtonSize = 'small' | 'default' | 'large';
export type TButtonType = 'default' | 'primary' | 'dashed'| 'danger' | 'spinner';
export type TButtonLoading = '' | 'loading-';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnInit {
  @Input() public type: TButtonType = 'primary';
  @Input() public size: TButtonSize = 'large';
  @Input() public loading: TButtonLoading = '';
  spinnerType: SpinnerType = '';
  isSpinner: boolean = false;

  public get className(): string{
    return `${this.loading}${this.type}-button__${this.size}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public load_spinner(): void {
    if (this.type === 'spinner') {
      if (this.spinnerType === '') {
        this.isSpinner = true;
        this.spinnerType = 'endangered_circles';
        this.loading = 'loading-';

      } else if (this.spinnerType === 'endangered_circles') {
        // this.isSpinner = true;
        this.spinnerType = 'little-merging_circles';
        this.loading = 'loading-';

      } else if (this.spinnerType === 'little-merging_circles') {
        // this.isSpinner = true;
        this.spinnerType = 'one_speed_in_circle';
        this.loading = 'loading-';

      } else {
        this.isSpinner = false;
        this.spinnerType = '';
        this.loading = '';
      }
    }
  }
}
