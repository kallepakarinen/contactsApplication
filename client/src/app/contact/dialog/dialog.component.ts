import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import {Contact} from "../contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }


  ngOnInit() {
  }
}

@Component({
  selector: 'dialog-dialog',
  templateUrl: './dialog-dialog.html',
})

export class DialogResultExampleDialog {

  contact: Contact;

  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>, public contactService: ContactService) {}

  add() {
    this.dialogRef.close(this.contact);
    this.contactService.saveContact(this.contact);
  }

}
