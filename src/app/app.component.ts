import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  public valueCheckbox1: boolean = false;
  public valueCheckbox2: boolean = false;

  public listRole = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Director' },
    { id: 3, name: 'Professor' },
    { id: 4, name: 'Student' }
  ];

  public formsList = [
    { id: 1, name: 'О программе' },
    { id: 2, name: 'Тарифы' },
    { id: 3, name: 'Отзывы' },
    { id: 4, name: 'FAQ' },
    { id: 5, name: 'Стать партнером' },
    { id: 6, name: 'Техподдержка' },
    { id: 7, name: 'Контакты'}
  ];

  public isSpinnerLarge: boolean = false;
  public isSpinnerDefault: boolean = false;
  public isSpinnerSmall: boolean = false;
  public isLoadingPage: boolean = false;
  public disabled: boolean = false;
  public page: string = 'nullPage';
  public checkmark: boolean = false;

  public controlInput: FormControl = this._fb.control('');
  public checkbox3Control: FormControl = this._fb.control('true');
  public radioControl: FormControl = this._fb.control(this.listRole[0]);
  public dropDownControl: FormControl = this._fb.control('');
  public dropDownDivControl: FormControl = this._fb.control('');

  // public divRoleForm: FormGroup = this._fb.group({
  //   divRoleName: ['', [Validators.required]]
  // });
  //  public form = new FormGroup({ a: [null] }); // то же самое, но так (через FormBuilder) "изящнее"

  constructor(private _fb: FormBuilder) {}

  public ngOnInit() {
    this.controlInput.valueChanges.subscribe((v) => console.log(v));
    this.checkbox3Control.valueChanges.subscribe((v) => console.log(v));
    this.radioControl.valueChanges.subscribe((v) => console.log(v));
    this.dropDownControl.valueChanges.subscribe((v) => console.log(v));
    this.dropDownDivControl.valueChanges.subscribe((v) => console.log(v));
  }

  public checkmarkOnChange(mark: boolean): void {
    this.checkmark = mark;
  }

  public submit(value: string): void {
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
