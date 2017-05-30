import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from "../contact";


@Component({
  selector: 'app-contact-card-list-item',
  templateUrl: './contact-card-list-item.component.html',
  styleUrls: ['./contact-card-list-item.component.css']
})
export class ContactCardListItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() update: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() map: EventEmitter<Contact>;


  constructor() {}

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
