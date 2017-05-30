import { Injectable } from '@angular/core';
import {Contact} from "../contact";



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
    /*
     let contacts = this.storageService.loadContacts();
     let contactsLength = contacts.length;
     if (contacts <= 1) {
     contact.id = 1;
     }
     else {
     contact.id = contactsLength + 1;
     }
     contacts.push(contact);
     this.storageService.saveContacts(contacts);
     */
    this.setLocalStorageData(contacts);
  }


  public deleteContact(contact: Contact) {

    /*
     let contacts = this.storageService.loadContacts();
     let removeId =   _.findIndex(contacts, ['id', contact.id]);
     contacts.splice(removeId, 1);
     this.storageService.saveContacts(contacts);
     */

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


