import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Contact} from "../contact";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  contact: Contact;
  dialogMode: string;
  saveMode: string;
  constructor(public dialogRef: MdDialogRef<DialogComponent>){
  }

save(){
    this.dialogRef.close(this.contact);
}
  ngOnInit(){
    this.dialogMode = 'Edit';
    if(!this.contact){
      this.dialogMode = 'Save';
      this.contact = new Contact();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
