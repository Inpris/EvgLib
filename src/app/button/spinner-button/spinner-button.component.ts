import {Component, OnInit} from '@angular/core';
import {SpinnerType} from '../../spinner/spinner.component';
import {TButtonColor, TButtonSize, TButtonType} from '../button.component';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.less']
})
export class SpinnerButtonComponent implements OnInit {

  type: TButtonType = 'spinner';
  size: TButtonSize = 'large';
  color: TButtonColor = '';
  spinnerType: SpinnerType = '';

  // width: string = 'width: 0';

  constructor() {
  }

  ngOnInit(): void {
  }

  // public load_spinner(): void {
  //   if (this.spinnerType === '') {
  //     this.spinnerType = 'endangered_circles';
  //     this.color = 'loading-';
  //
  //   } else if (this.spinnerType === 'endangered_circles') {
  //     this.spinnerType = 'merging_circles';
  //     this.color = 'loading-';
  //
  //   } else if (this.spinnerType === 'merging_circles') {
  //     this.spinnerType = 'one_speed_in_circle';
  //     this.color = 'loading-';
  //
  //   } else {
  //     this.spinnerType = '';
  //     this.color = '';
  //   }
  // }
}
