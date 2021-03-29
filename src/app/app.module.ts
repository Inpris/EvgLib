import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PrimaryButtonModule} from './button/primary-button/primary-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimaryButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
