import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuTabsComponent} from './menu-tabs.component';

@NgModule({
  declarations: [MenuTabsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MenuTabsComponent,
  ],
})
export class MenuTabsModule { }
