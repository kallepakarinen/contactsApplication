import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Contact } from "../contact";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() remove: EventEmitter<Contact>;
  @Output() update: EventEmitter<Contact>;
  @Output() map: EventEmitter<Contact>;

  constructor() {
    this.remove = new EventEmitter();
    this.update = new EventEmitter();
    this.map = new EventEmitter();
  }

  ngOnInit() {
  }

  contactDelete(contact: Contact){
    this.remove.emit(contact);
  }

  contactUpdate(contact: Contact){
    this.update.emit(contact);
  }

  showMap(contact: Contact){
    this.map.emit(contact);
  }
}
