import { Injectable } from '@angular/core';
import { Contact } from "../contact";
import {ContactLocalstorageService} from "./contact-localstorage.service";
import * as _ from "lodash";
import {ContactApiService} from "./contact-api.service";



@Injectable()
export class ContactService {
  constructor(public storageService: ContactLocalstorageService, private contactApiService: ContactApiService) {
  }

  public addNewContact(contact: Contact) {

    return this.contactApiService.createContact(contact);
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
  }

  public findContacts() {
   // return this.storageService.loadContacts();
    return this.contactApiService.findContacts();
  }

  public deleteContact(contact: Contact) {
    return this.contactApiService.deleteContact(contact);

    /*
   let contacts = this.storageService.loadContacts();
   let removeId =   _.findIndex(contacts, ['id', contact.id]);
   contacts.splice(removeId, 1);
   this.storageService.saveContacts(contacts);
*/

  }

public updateContact(contact: Contact){
    return this.contactApiService.updateContact(contact);
    /*
    let contacts = this.storageService.loadContacts();
    let updateId =  _.findIndex(contacts, ['id', contact.id]);
    contacts.splice(updateId, 1, contact);
    this.storageService.saveContacts(contacts);*/
}
}
