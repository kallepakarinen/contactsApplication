import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule, MdInputModule, MdCardModule, MdIconModule, MdDialogModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactService } from './contact/services/contact.service';
import { ContactApiService } from './contact/services/contact-api.service';
import { DialogComponent } from './contact/dialog/dialog.component';
import {ContactLocalstorageService} from "./contact/services/contact-localstorage.service";
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

import {DialogService} from "./contact/services/dialog.service";
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { ContactCardListItemComponent } from './contact/contact-card-list-item/contact-card-list-item.component';
//import {Observable} from "rxjs";
const routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component:UserComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    DialogComponent,
    ContactComponent,
    UserComponent,
    MapDialogComponent,
    ContactAddressPipe,
    ContactCardListItemComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    MdDialogModule,
    RouterModule.forRoot(routes)
  //Observable
  ],

  providers: [ContactService, ContactApiService, ContactLocalstorageService, DialogService],
  bootstrap: [AppComponent,  DialogComponent, MapDialogComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
