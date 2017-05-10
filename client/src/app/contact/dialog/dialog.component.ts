import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Contact} from "../contact";
import {isNullOrUndefined, isUndefined} from "util";

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
 if (!this.contact.firstName || !this.contact.lastName){
  alert('Give your name');
  }else{
   this.dialogRef.close(this.contact);
 }
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
