import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {MdDialogRef} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {
  contact: Contact;
  mapUrl: string;

  constructor(public dialog: MdDialogRef<MapDialogComponent>, private sanitizer: DomSanitizer) {
  }

  close() {
    this.dialog.close();
  }

  getMapSource(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.mapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDmUcAU7BWA5VkyY5KvP84kM8fc_bdXMoM&q=' + this.contact.address + ', ' + this.contact.city;
  }
}
