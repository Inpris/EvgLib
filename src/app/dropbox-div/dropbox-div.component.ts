import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dropbox-div',
  templateUrl: './dropbox-div.component.html',
  styleUrls: ['./dropbox-div.component.less']
})
export class DropboxDivComponent implements OnInit {
  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public form;
  @Input() public firstText = '';
  isSubmitted: boolean = false;
  // dropboxValue: string = this.firstText;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    // this.list.splice(0, 0, this.firstText);
  }

  // changeRole(event) {
  //   console.log(event.value);
  //
  //   this.divRoleName.setValue(event.target.value, {
  //     onlySelf: true
  //   });
  // }

  show() {
    this.isSubmitted = !this.isSubmitted;
  }

  setValue(itemName) {
    this.firstText = itemName;

    this.divRoleName.setValue(itemName, {
      onlySelf: true
    });
  }

//  геттер для roleForm
  get divRoleName() {
    return this.form.get('divRoleName');
  }
}
