import {Component} from '@angular/core';
import {TButtonSize, TButtonType} from './button/button.component';
import {SpinnerType} from './spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'EvgLib';

  type: TButtonType = 'primary';
  size: TButtonSize = 'large';

  isSpinner: boolean = false;
  isLoadingPage: boolean = false;
  page: string = '';

  public load(): void {
    this.isSpinner = true;
    setTimeout(this.stopLoad, 15000);
  }

  public stopLoad(): void {
    this.isSpinner = false;
  }

  public pageIsLoading(): void {
    this.page = 'loadingPage';
    this.isLoadingPage = true;

    setTimeout(this.stopPageIsLoading, 15000);
  }

  public stopPageIsLoading(): void {
    this.isLoadingPage = false;
    this.page = '';
  }

  constructor() {

  }

}
