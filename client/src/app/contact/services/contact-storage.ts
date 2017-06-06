import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";

export interface ContactStorage {
  findContacts(): Observable<Contact[]>;
  saveContact(contact: Contact): Observable<any>;
  deleteContact(id: number): Observable<any>;
  updateContact(contact: Contact): Observable<any>;
}
