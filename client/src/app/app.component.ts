import { Component, ViewChild } from '@angular/core';
import {MdSidenavModule} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenavModule;
    constructor(){
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
