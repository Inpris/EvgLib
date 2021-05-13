import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from './button/button.module';
import {SpinnerModule} from './spinner/spinner.module';
import {InputModule} from './input/input.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckboxModule} from './checkbox/checkbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    ButtonModule,
    SpinnerModule,
    InputModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
