import {Component, OnInit} from '@angular/core';
import {TButtonSize, TButtonType} from './button/button.component';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title1: boolean = false;
  title2: boolean = false;
  title3: boolean = true;

  type: TButtonType = 'primary';
  size: TButtonSize = 'large';

  isSpinnerLarge: boolean = false;
  isSpinnerDefault: boolean = false;
  isSpinnerSmall: boolean = false;
  isLoadingPage: boolean = false;
  disabled: boolean = false;
  page: string = 'nullPage';

  public controlInput: FormControl = this._fb.control('');
  public checkmark: boolean = false;

  constructor(private _fb: FormBuilder) {}

  public ngOnInit() {
    this.controlInput.valueChanges.subscribe((v) => console.log(v));
  }

  public checkmarkOnChange(mark: boolean): void {
    this.checkmark = mark;
  }

  public submit(value: string){
    alert(value);
  }

  public loadLarge(): void {
    if (!this.disabled) {
      this.isSpinnerLarge = true;

      // if (this.i === 0) { // Выключает спиннер по клику
      //   this.isSpinner = true;
      //   this.i = 1;
      // }
      // else if (this.i === 1) {
      //   this.isSpinner = false;
      //   this.i = 0;
      // }

      setTimeout(() => {
        this.isSpinnerLarge = false;
      }, 5000);
    }
  }

  public loadDefault(): void {
    if (!this.disabled) {
      this.isSpinnerDefault = true;
      setTimeout(() => {
        this.isSpinnerDefault = false;
      }, 5000);
    }
  }

  public loadSmall(): void {
    if (!this.disabled) {
      this.isSpinnerSmall = true;
      setTimeout(() => {
        this.isSpinnerSmall = false;
      }, 5000);
    }
  }

  public pageIsLoading(): void {
    this.disabled = true;
    this.isLoadingPage = true;
    this.page = 'loadingPage';

    // setTimeout(this.stopPageIsLoading, 5000);
    setTimeout(() => { this.isLoadingPage = false; this.page = ''; this.disabled = false; }, 5000);
  }

  public stopPageIsLoading(): void { // не понимаю, почему не работает, если передать имя этой функии в setTimeout
    this.isLoadingPage = false;
    this.page = '';
  }
}
