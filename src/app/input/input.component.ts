import {Component, Input, OnInit} from '@angular/core';

export type className = '' | 'default';
export type size = '' | 'large';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})

export class InputComponent implements OnInit {
  @Input() public class_name: className = 'default';
  @Input() public size: size = 'large';
  content: string = 'text';

  public get className(): string{
    return `${this.class_name}__${this.size}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public skillsHandleEnter(event): void {
    event.preventDefault();
    // перехват enter-ов, ПАЧИМУ НИРАБОТАИТ :(
  }

}
