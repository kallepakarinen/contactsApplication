import { Injectable } from '@angular/core';
import {User} from "../user";
import {Http} from "@angular/http";

@Injectable()
export class UserApiService {
  url = 'http://localhost:49935/api/login';

  constructor(private http: Http) { }

  findUsers() {
    return this.http.get(this.url).map(response => response.json() as User[]);
  }

  findUserByUsername(Username) {
    return this.http.get(this.url + '/' + Username).map(response => response.json() as User);
  }

}
