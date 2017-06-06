import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule, MdInputModule, MdCardModule, MdIconModule, MdDialogModule, MdToolbarModule, MdSidenavModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactService } from './contact/services/contact.service';
import { ContactApiService } from './contact/services/contact-api.service';
import {ContactLocalstorageService} from "./contact/services/contact-localstorage.service";
import {UserService} from "./user/services/user.service";

import { DialogComponent } from './contact/dialog/dialog.component';
import { ContactComponent } from './contact/contact.component';
import {DialogService} from "./contact/services/dialog.service";
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { ContactCardListItemComponent } from './contact/contact-card-list-item/contact-card-list-item.component';
import { LoginComponent } from './user/login/login.component';
import {UserApiService} from "./user/services/user-api.service";
const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
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
    MapDialogComponent,
    ContactAddressPipe,
    ContactCardListItemComponent,
    LoginComponent
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
    MdToolbarModule,
    MdSidenavModule,
    RouterModule.forRoot(routes)
  //Observable
  ],

  providers: [ContactService, ContactApiService, ContactLocalstorageService, DialogService, UserService, UserApiService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, MapDialogComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
