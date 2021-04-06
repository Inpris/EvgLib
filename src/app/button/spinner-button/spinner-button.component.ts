import {Component, OnInit} from '@angular/core';
import {SpinnerType} from '../../spinner/spinner.component';
import {TButtonLoading, TButtonSize, TButtonType} from '../button.component';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.less']
})
export class SpinnerButtonComponent implements OnInit {

  type: TButtonType = 'spinner';
  size: TButtonSize = 'large';
  loading: TButtonLoading = '';
  spinnerType: SpinnerType = '';

  // width: string = 'width: 0';

  constructor() {
  }

  ngOnInit(): void {
  }

  public load_spinner(): void {
    if (this.spinnerType === '') {
      this.spinnerType = 'endangered_circles';
      this.loading = 'loading-';

    } else if (this.spinnerType === 'endangered_circles') {
      this.spinnerType = 'merging_circles';
      this.loading = 'loading-';

    } else if (this.spinnerType === 'merging_circles') {
      this.spinnerType = 'one_speed_in_circle';
      this.loading = 'loading-';

    } else {
      this.spinnerType = '';
      this.loading = '';
    }
  }
}
