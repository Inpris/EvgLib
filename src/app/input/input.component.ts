import {Component, Input, OnInit} from '@angular/core';

export type className = 'default' | 'up_little_label' | 'down_little_label' | 'change_size_label' | 'transparent';
/* | 'without_all' | 'phone_input' | 'password_input' | 'reSize' */
export type whatLabel = '' | 'up_little_label' | 'down_little_label' | 'change_size_label';

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
    if (this.whatLabel) {
      this.class_name = this.whatLabel;
    }
    return `${this.disabled ? 'disabled-' : ''}${this.isParser ? 'haveParser-' : ''}${this.class_name}`;
  }

  constructor() { }

  ngOnInit(): void {
    if ( this.isParser === true && this.whatParser === '' ) {
      this.whatParser = 'add whatParser=\"any\"' ;
    }

    if ( this.whatLabel !== '' && this.textLabel === '' ) {
      this.textLabel = 'add textLabel=\"any\"' ;
    }

    if ( this.whatLabel !== '') {
      this.content = '';
    }

    if ( this.class_name === 'transparent' && this.content === '' ) {
      this.content = 'add content=\"any\"';
    }
  }

  public stopEnter(event): void {
    if (event.key === 'Enter') {
      // debugger
      event.preventDefault();
    }
  }

  public getTextID(event): void {
    this.content = '';

    if (this.class_name === 'default') {
      this.textId = 'fill';
    }
  }
}
