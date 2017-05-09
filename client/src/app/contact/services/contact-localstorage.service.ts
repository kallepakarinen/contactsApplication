import { Injectable } from '@angular/core';

import {Observable} from "rxjs";


@Injectable()
export class ContactLocalstorageService {
  private contactsStorageKey = 'ca-contacts';
  contacts = [];

  constructor() {
    if(!localStorage.getItem(this.contactsStorageKey)){
      localStorage.setItem(this.contactsStorageKey, JSON.stringify([]));
    }
  }

//test app
/*
  public loadContacts(){
    let contacts =this.getLocalStorageData();
    return Observable.of(contacts);
  }

  public saveContacts(contacts) {
    this.setLocalStorageData(contacts);
    return Observable.of(contacts);
  }

  private getLocalStorageData() {
    let data = localStorage.getItem(this.contactsStorageKey);
    return JSON.parse(data);
  }

  private setLocalStorageData(givenData) {
    let contacts = JSON.stringify(givenData);
    localStorage.setItem(this.contactsStorageKey, contacts);
  }

*/


public loadContacts(){
  return this.getLocalStorageData();
}

  public saveContacts(contacts) {
    this.setLocalStorageData(contacts);
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
