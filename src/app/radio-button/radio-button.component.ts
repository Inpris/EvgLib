import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent implements OnInit {

  @Input() public disabled: boolean = false;
  @Input() frm: FormGroup;
  @Input() label: string;
  @Input() cn: string;
  @Input() value: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {

  }
}
