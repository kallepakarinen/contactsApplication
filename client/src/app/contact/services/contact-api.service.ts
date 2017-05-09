import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";

@Injectable()
export class ContactApiService {

  constructor(private http: Http) { }

  findContacts(){
    let url = 'http://localhost:60829/api/contacts';
 return this.http
   .get(url)
   .map(response => response.json() as Contact[]);

  }

}

