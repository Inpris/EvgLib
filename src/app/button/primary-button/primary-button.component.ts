import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.less']
})
export class PrimaryButtonComponent implements OnInit {
  public className: string = 'primary-button__large';

  constructor() { }

  ngOnInit(): void {
  }

  public set_className(name: number): void {
    if (name === 1){
      this.className = 'primary-button__small';
    }
    if (name === 2){
      this.className = 'primary-button__default';
    }
    if (name === 3){
      this.className = 'primary-button__large';
    }
  }
}
