import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from './button/button.module';
import {SpinnerModule} from './spinner/spinner.module';
import {InputModule} from './input/input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SpinnerModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
