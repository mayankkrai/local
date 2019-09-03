import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostListener } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { FormComponent } from './form/form.component';
import { Routing } from './routing.module';
import {FormsModule} from '@angular/forms';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    FormComponent,
    FrontpageComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
