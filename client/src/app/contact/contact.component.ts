import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
//  contact: Contact;


  constructor(public dialog: DialogService, private contactService: ContactService) {
  }

  ngOnInit(): void {
    //  this.contact = new Contact;
    this.updateContacts();
  }

  updateContacts() {
    this.contactService.findContacts().subscribe(contacts => {
      this.contacts = contacts;
    });

  }

  saveContact(): void {
    let input = this.dialog.contactDialog();
    input.subscribe(result => {
      if (result) {
        this.contactService.saveContact(result).subscribe(response => {
          this.updateContacts();
        });
      }
    });
  }

  contactUpdate(contact: Contact): void {
    let input = this.dialog.contactDialog(contact);
    input.subscribe(result => {
      if (result) {
        this.contactService.updateContact(result).subscribe(response => {
          this.updateContacts();
        });
      }
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id).subscribe(response => {
      this.updateContacts();
    });
  }

  showOnMap(contact: Contact): void {
    this.dialog.mapDialog(contact);
    console.log(contact);
  }

}
