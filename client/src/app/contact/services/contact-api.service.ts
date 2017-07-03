import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import {ContactStorage} from "./contact-storage";
import {HttpService} from "../../user/services/http.service";


@Injectable()
export class ContactApiService implements ContactStorage {
  url = environment.endpointUrl + '/contacts';

  constructor(private http: HttpService) {
  }

  findContacts() {
    return this.http.get(this.url).map(response => response.json() as Contact[]);
  }

  saveContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put(this.url + '/' + contact.id, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

