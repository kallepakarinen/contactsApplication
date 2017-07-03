//Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnectionBackend, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MdButtonModule, MdInputModule, MdCardModule, MdIconModule, MdDialogModule, MdToolbarModule, MdSidenavModule
} from '@angular/material';
import {Router, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Components
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {DialogComponent} from './contact/dialog/dialog.component';
import {ContactComponent} from './contact/contact.component';
import {MapDialogComponent} from './contact/map-dialog/map-dialog.component';
import {ContactCardListItemComponent} from './contact/contact-card-list-item/contact-card-list-item.component';
import {LoginComponent} from './user/login/login.component';
//Services
import {ContactService} from './contact/services/contact.service';
import {ContactApiService} from './contact/services/contact-api.service';
import {ContactLocalstorageService} from "./contact/services/contact-localstorage.service";
import {DialogService} from "./contact/services/dialog.service";
import {UserService} from "./user/services/user.service";
import {UserApiService} from "./user/services/user-api.service";
import {DeviceService} from "./utils/device.service";
import {HttpService} from "./user/services/http.service";
import {AuthenticationService} from "./user/services/authentication.service";
//Other
import {VibrationDirective} from './utils/vibration.directive';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
export function getHttp(backend: XHRBackend, options: RequestOptions, router: Router) {
  return new HttpService(backend, options, router);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    DialogComponent,
    ContactComponent,
    MapDialogComponent,
    ContactAddressPipe,
    ContactCardListItemComponent,
    LoginComponent,
    VibrationDirective
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
  ],

  providers: [ContactService, ContactApiService, ContactLocalstorageService, DialogService, UserService, UserApiService, DeviceService, AuthenticationService, HttpService, {
    provide: HttpService,
    useFactory: getHttp,
    deps: [XHRBackend, RequestOptions, Router]
  },],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, MapDialogComponent]
})
export class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);
