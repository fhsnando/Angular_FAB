import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelpComponent} from './help/help.component';
import {HelpBootstrapComponent} from './help-bootstrap/help-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    HelpBootstrapComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
