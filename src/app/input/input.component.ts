import {Component, Input, OnInit} from '@angular/core';

export type className = 'default' /* | 'without_all' | 'phone_input' | 'password_input' | 'reSize' */;
export type whatLabel = '' | 'up_little' | 'down_little';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})

export class InputComponent implements OnInit {
  @Input() public class_name: className = 'default';
  @Input() public content: string = '';
  @Input() public whatLabel: whatLabel = '';
  @Input() public textLabel: string = '';
  @Input() public isParser: boolean = false;
  @Input() public whatParser: string = '';
  @Input() public disabled: boolean = false;

  public edit: boolean = true;
  public textId: string = 'empty';

  public get ID(): string{
    return `${this.textId}`;
  }

  // public get editable(): boolean {
  //   return !disabled;
  // }

  public get className(): string{
    return `${this.disabled ? 'disabled-' : ''}${this.isParser ? 'haveParser-' : ''}${this.class_name}${this.whatLabel}`;
  }

  constructor() { }

  ngOnInit(): void {
    if ( this.class_name === 'default' && this.content === '') {
      this.content = 'add content=\"any\"';
    }

    if ( this.isParser === true && this.whatParser === '' ) {
      this.whatParser = 'add whatParser=\"any\"' ;
    }

    if ( this.whatLabel !== '' && this.textLabel === '' ) {
      this.textLabel = 'add textLabel=\"any\"' ;
    }
  }

  public stopEnter(event): void {
    if (event.key === 'Enter') {
      // debugger
      event.preventDefault();
    }
    // перехват enter-ов, ПАЧИМУ НИРАБОТАИТ :(
  }

  public getTextID(event): void {
    this.content = '';

    if (this.class_name === 'default') {
    this.textId = 'fill'; }
    // работает только если полностью удалить this.content вручную и нажать backspace ещё раз
  }
}
