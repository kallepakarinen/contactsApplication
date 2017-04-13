import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';



import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import { ContactService } from './contact/services/contact.service';
import { DialogComponent, DialogResultExampleDialog } from './contact/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    DialogResultExampleDialog,
    DialogComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule


  ],
  providers: [ContactService],
  bootstrap: [AppComponent, DialogResultExampleDialog, DialogComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
