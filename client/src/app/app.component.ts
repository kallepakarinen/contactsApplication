import { Component, ViewChild } from '@angular/core';
import {MdSidenavModule} from "@angular/material";
import * as _ from 'lodash';
import {NavigationEnd, Router} from "@angular/router";
import {User} from "./user/user";
import {UserService} from "./user/services/user.service";
import {HttpService} from "./user/services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})


export class AppComponent {

  user: User;
  @ViewChild('sidenav') sidenav: MdSidenavModule;
  constructor(private router: Router, private userService: UserService, private http: HttpService){
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
          return;
        }
        this.user = this.userService.findUser();
      }
    });
  }
 logOut(){
    console.log('woik');
    this.http.destroyToken();
    this.router.navigate(['/login']);
  }
}
