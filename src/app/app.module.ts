import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './button/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
