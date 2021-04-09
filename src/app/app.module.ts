import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from './button/button.module';
import { SpinnerComponent } from './spinner/spinner.component';
import {SpinnerModule} from './spinner/spinner.module';
import {SpinnerButtonModule} from './button/spinner-button/spinner-button.module';
import {InputModule} from './input/input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SpinnerModule,
    SpinnerButtonModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
