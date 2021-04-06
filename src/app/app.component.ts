import { Component } from '@angular/core';
import { TButtonLoading, TButtonSize, TButtonType } from './button/button.component';
import { SpinnerType } from './spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'EvgLib';

  type: TButtonType = 'primary';
  size: TButtonSize = 'large';
  loading: TButtonLoading = '';
  spinnerType: SpinnerType = '';

}
