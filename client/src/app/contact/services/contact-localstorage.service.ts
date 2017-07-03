import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";
import * as _ from "lodash";

@Injectable()
export class ContactLocalstorageService implements ContactStorage {
  private contactsStorageKey = 'ca-contacts';

  constructor() {
    if (!localStorage.getItem(this.contactsStorageKey)) {
      localStorage.setItem(this.contactsStorageKey, JSON.stringify([]));
    }
  }

  public findContacts(): Observable<Contact[]> {
    let contacts = this.getLocalStorageData();
    return Observable.of(contacts);
  }

  public saveContact(contact: Contact): Observable<any> {
    let contacts = this.getLocalStorageData();
    let contactsLength = _.size([contacts]);
    console.log(contactsLength);
    if (contacts <= 1) {
      contact.id = 1;
    }
    else {
      contact.id = contactsLength + 1;
    }
    contacts.push(contact);
    this.setLocalStorageData(contacts);
    return Observable.of(null);
  }

  public deleteContact(id: number): Observable<any> {
    if (id >= 0) {
      let contacts = this.getLocalStorageData();
      let index = _.findIndex(contacts, ['id', id]);
      if (index >= 0) {
        contacts.splice(index, 1);
        this.setLocalStorageData(contacts);
      }
    }
    return Observable.of(null);
  }

  updateContact(contact: Contact): Observable<any> {
    if (contact) {
      let contacts = this.getLocalStorageData();
      let index = _.findIndex(contacts, ['id', contact.id]);
      if (index >= 0) {
        contacts.splice(index, 1, contact);
        this.setLocalStorageData(contacts);
      }
    }
    return Observable.of(null);
  }

  private getLocalStorageData() {
    let data = localStorage.getItem(this.contactsStorageKey);
    return JSON.parse(data);
  }

  private setLocalStorageData(givenData) {
    let contacts = JSON.stringify(givenData);
    localStorage.setItem(this.contactsStorageKey, contacts);
  }
}


