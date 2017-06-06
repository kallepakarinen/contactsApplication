import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactLocalstorageService} from "./contact-localstorage.service";
import {ContactApiService} from "./contact-api.service";
import {ContactStorage} from "./contact-storage";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactService {
  contactStorage: ContactStorage;

  constructor(storageService: ContactLocalstorageService, contactApiService: ContactApiService) {
    this.contactStorage = environment.endpointUrl ? contactApiService : storageService;
  }

  public saveContact(contact: Contact) {
    return this.contactStorage.saveContact(contact);
  }

  public findContacts() {
    return this.contactStorage.findContacts();
  }

  public deleteContact(id: number) {
    return this.contactStorage.deleteContact(id);
  }

  public updateContact(contact: Contact) {
    return this.contactStorage.updateContact(contact);
  }
}
