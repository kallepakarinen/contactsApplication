import { Injectable } from '@angular/core';
import { Contact } from "../contact";
import {ContactLocalstorageService} from "./contact-localstorage.service";
//import {ContactApiService} from "./contact-api.service";
import * as _ from "lodash";



@Injectable()
export class ContactService {
  constructor(public storageService: ContactLocalstorageService) {
  }

  public addNewContact(contact: Contact) {
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
  }

  public findContacts() {
    return this.storageService.loadContacts();
  }

  public deleteContact(contact: Contact) {
   let contacts = this.storageService.loadContacts();
   let removeId =   _.findIndex(contacts, ['id', contact.id]);
   console.log(removeId);
   contacts.splice(removeId, 1);
   this.storageService.saveContacts(contacts);

    //return this.httpService.deleteContact(id);
  }
public updateContact(contact: Contact){
    let contacts = this.storageService.loadContacts();
    let updateId =  _.findIndex(contacts, ['id', contact.id]);
    contacts.splice(updateId, 1, contact);
    this.storageService.saveContacts(contacts);
}


  /*
   public findContacts() {
   return this.contactApiService.findContacts();
   }
   */

}
