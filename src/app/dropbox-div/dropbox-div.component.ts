import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormBuilder} from '@angular/forms';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dropbox-div',
  templateUrl: './dropbox-div.component.html',
  styleUrls: ['./dropbox-div.component.less']
})
export class DropboxDivComponent implements OnInit {
  @ViewChild('dropdown', { read: ElementRef }) public dropdown: ElementRef;

  @Input() public disabled: boolean = false;
  @Input() public list = [];
  @Input() public form;
  @Input() public firstText = '';
  @Input() value: string;
  isSubmitted: boolean = false;

  // dropboxValue: string = this.firstText;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {}

  show() {
    this.isSubmitted = !this.isSubmitted;
  }

  setValue($event, itemName) {
    if (!this.disabled) {
      this.firstText = itemName;
      this.isSubmitted = !this.isSubmitted;

      this.divRoleName.setValue(itemName);
    }
  }

//  геттер для roleForm
  get divRoleName() {
    return this.form.get('divRoleName');
  }

}
