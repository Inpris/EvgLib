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
  public content: string = 'text';
  public textId: string = 'empty';

  public get ID(): string{
    return `${this.textId}`;
  }

  public get className(): string{
    return `${this.class_name}__${this.size}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public stopEnter(event): void {
    event.preventDefault();
    // перехват enter-ов, ПАЧИМУ НИРАБОТАИТ :(
  }

  public getTextID(event): void {
    this.content = '';
    this.textId = 'fill';
    // работает только если полностью удалить this.content вручную и нажать backspace ещё раз
  }
}
