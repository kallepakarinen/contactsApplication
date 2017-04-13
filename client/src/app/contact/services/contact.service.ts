import { Injectable } from '@angular/core';
import { Contact } from "../contact";

@Injectable()
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Kalle', 'Pakarinen', '044987665', 'Kotikatu 4', 'Lappeenranta'),
      new Contact('Sepi', 'Kumpulainen', '088477747', 'Seppinkatu 4', 'Missälie'),
      new Contact('Jaana', 'Pelkonen', '88376655', 'Tilttikatu r4', 'Missälie')
    ];
  }

  public findContacts(): Contact[] {
    return this.contacts;
  }

  public saveContact(contact: Contact) {
    this.contacts.push(contact);
    console.log(this.contacts);
  }
}

