import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import {ContactStorage} from "./contact-storage";


@Injectable()
export class ContactApiService implements ContactStorage{
  url = environment.endpointUrl + '/contacts';
  constructor(private http: Http) {}

  findContacts(){
    console.log('api-serv');
    return this.http.get(this.url).map(response => response.json() as Contact[]);
  }
/*
  findContactById(id): Observable<Contact> {
    return this.http
      .get(this.url)
      .map(function (response) {
        return response.json() as Contact;
      });
  }
*/

/*
  saveContact (contact: Contact){
 return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }
*/
  saveContact(contact: Contact){
    return this.http.post(this.url,contact);
}

  updateContact(contact: Contact){
  return this.http.put(this.url + '/' + contact.id, contact);
}

deleteContact(id: number){
  return this.http.delete(this.url + '/' + id);
}
}

