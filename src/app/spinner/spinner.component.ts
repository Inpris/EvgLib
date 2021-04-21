import {Component, Input, OnInit} from '@angular/core';

export type SpinnerType = 'little-merging_circles' | '' | 'merging_circles' | 'sticks' | 'one_speed' | 'one_speed_in_circle' | 'stop-down' | 'circles' | 'endangered_circles';
// export type SpinnerSize = 'little-' | '';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {

  @Input() public spinnerType: SpinnerType = '';

  public get className(): string {
    return `${this.spinnerType}`;
  }
  /* -${this.spinnerSize} - можно сделать несколько размеров спинеров таким образом,
  но удобнее будет выбирать размер font-size в зависимости от ситуации,
  для этого нужно удалить это свойство из стиля в файле .less и добавиь его в html,
  где используется элемент
   */
  constructor() { }

  ngOnInit(): void {
  }

}
