import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public form;
  @Input() public firstText = '';

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeRole(event) {
    if (!this.disabled) {

    this.roleName.setValue(event.target.value, {
      onlySelf: true
    });
  }
  }

//  геттер для roleForm
  get roleName() {
    return this.form.get('roleName');
  }
}
