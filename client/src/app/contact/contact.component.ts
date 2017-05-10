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
    this.contact = new Contact;
    this.updateContacts();
  }

  updateContacts() {
    this.contacts = this.contactService.findContacts();
  }

 saveContact(): void {
    let buttonPressed = this.dialog.contactDialog();
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.addNewContact(result);
             this.updateContacts();
      }
    });
  }

  contactUpdate(contact: Contact): void {
    let buttonPressed = this.dialog.contactDialog(contact);
    buttonPressed.subscribe(result => {
      if (result) {
        this.contactService.updateContact(result);
        this.updateContacts();
      }
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.updateContacts();
  }

  showOnMap(contact: Contact): void {
    this.dialog.mapDialog(contact);
    console.log(contact);
  }
  /*
   constructor(){
   this.ContactService.findContacts().subscribe(data =>{
   console.log(data.json);
   //this.contacts = data.json();
   this.contacts = data.json();
   });

   }*/

}