import {Component, Input, OnInit} from '@angular/core';

export type TButtonSize = 'small' | 'default' | 'large';
export type TButtonType = 'default' | 'primary' | 'dashed'| 'danger';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnInit {
  @Input() public type: TButtonType = 'primary';
  @Input() public size: TButtonSize = 'large';

  public get className(): string{
    return `${this.type}-button__${this.size}`;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
