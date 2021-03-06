import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ButtonModule} from './button/button.module';
import {SpinnerModule} from './spinner/spinner.module';
import {CheckboxModule} from './checkbox-with-output/checkbox.module';
import {CheckboxControlValueAccessorModule} from './checkbox-control-value-accessor/checkbox-control-value-accessor.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadioButtonModule} from './radio-button/radio-button.module';
import {DropdownModule} from './dropdown-select/dropdown.module';
import {DropdownDivModule} from './dropdown-div/dropdown-div.module';
import {MenuTabsModule} from './menu-tabs/menu-tabs.module';
import {EditTableModule} from './edit-table/edit-table.module';
import {InputModule} from './input/input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        SpinnerModule,
        InputModule,
        CheckboxControlValueAccessorModule,
        CheckboxModule,
        RadioButtonModule,
        DropdownModule,
        DropdownDivModule,
        MenuTabsModule,
        EditTableModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
