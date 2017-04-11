import { Injectable } from '@angular/core';
import { Contact } from "../contact";

@Injectable()
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0, 'Kalle'),
      new Contact(1, 'sepi')
    ];
  }

  public findContacts(): Contact[] {
    return this.contacts;
  }
}

