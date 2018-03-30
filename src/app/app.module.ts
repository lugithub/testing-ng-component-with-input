import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentUnderTestComponent } from './component-under-test/component-under-test.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentUnderTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
