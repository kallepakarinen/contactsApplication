import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../contact";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  @Input() contacts: [Contact];
  @Output() contactUpdate: EventEmitter<Contact>;
  @Output() contactDelete: EventEmitter<Contact>;
  @Output() showMap: EventEmitter<Contact>;

  constructor() {
    this.contactUpdate = new EventEmitter();
    this.contactDelete = new EventEmitter();
    this.showMap = new EventEmitter();
  }

  ngOnInit() {
  }
}
