import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.less']
})
export class MenuTabsComponent implements ControlValueAccessor {
  @Input() public disabled: boolean = false;
  @Input() public tabs = [];
  @Input() public valueName: string = '';

  public isPushed: boolean = false;
  public menuTabValue: string = ''; // выбранное значение
  public tabContent;
  public tabLinks;

  private _changeFn: (...args) => any = () => {};
  private _touchedFn: (...args) => any = () => {};

  constructor() { }

  public writeValue(value: string): void {
    this.menuTabValue = value[this.valueName];
  }

  public registerOnChange(fn: any): void {
    this._changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  public changeVisibility(): void {
    this.isPushed = !this.isPushed;
  }

  public setValue(item): void {
    console.log('DROPDOWN_DIV_VALUE = ', item[this.valueName]);
    this._changeFn(item);

    this.menuTabValue = item[this.valueName];
    this.isPushed = !this.isPushed;
  }

  public openCity(event) {
    // this.tabContent = document.getElementsByClassName('tabContent');
    //
    // for ( let i in this.tabContent.length ) { //
    //   this.tabContent[i].style.display = 'none';
    // }
    //
    // this.tabLinks = document.getElementsByClassName('tablinks');
    //
    // for (let i in this.tabLinks.length) {
    //   this.tabLinks[i].className = this.tabLinks[i].className.replace(' active', '');
    // }
    // document.getElementById(cityName).style.display = 'block';
    // event.currentTarget.className += ' active';
  }

}
