import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditTableComponent),
      multi: true
    }
  ]
})
export class EditTableComponent implements OnInit {
  static idCounter: number = 0;

  @Input() public disabled: boolean = false;
  @Input() public listHead = [ 'Количество рентгенов',  'Время действия',  'Стоимость, руб.',  'Ссылка на преобретение' ];
  @Input() public columnNumber: number;
  @Input() public listData = [];
  @Input() public needDeleteAndAddRows: boolean = true;

  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;

  public listElementsId = [];
  public editableValue = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
  }

  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      name: [''],
      email: [''],
      dob: [''],
      bloodGroup: [''],
      mobNumber: [''],
      isEditable: [true]
    });
  }

  addRow() {
    if (this.needDeleteAndAddRows) {
      const control = this.userTable.get('tableRows') as FormArray;
      control.push(this.initiateForm());
    }
  }

  deleteRow(index: number) {
    if (this.needDeleteAndAddRows) {
      const control =  this.userTable.get('tableRows') as FormArray;
      control.removeAt(index);
    }
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
  }

  toggleTheme() {
    this.mode = !this.mode;
  }
}
