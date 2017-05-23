import {Component, OnInit } from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit{

  contacts:  Contact[];
  contact: Contact;


  constructor(public dialog: DialogService, private contactService: ContactService){
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
/*
 saveContact(): void {
    let buttonPressed = this.dialog.contactDialog();
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.addNewContact(result);
             this.updateContacts();
      }
    });
  }*/
  private saveContact(contact) {
    this.dialog.contactDialog(contact).subscribe(contact => {
      if (contact){
        this.contactService.addNewContact(contact).subscribe(response => {
          this.updateContacts()
        });
      }
    });
  }


  contactUpdate(contact) {
    this.dialog.contactDialog(contact).subscribe(contact => {
      console.log(contact);
      if (contact){
        this.contactService.addNewContact(contact).subscribe(response => {
          this.updateContacts()
        });
      }
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(allDone => {
      if (allDone) {
        this.updateContacts();
      }
    });
  }


  showOnMap(contact: Contact): void {
    this.dialog.mapDialog(contact);
    console.log(contact);
  }

}
