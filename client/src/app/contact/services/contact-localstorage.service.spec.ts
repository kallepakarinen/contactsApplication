/*  import {inject, TestBed} from "@angular/core/testing";
 import {ContactLocalstorageService} from "./contact-localstorage.service";
 import {Contact} from "../contact";
 import * as _ from 'lodash';

describe('ContactLocalstorageService', () => {

  let localStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalstorageService]
    });
  });

//Local Storage Mock
  beforeEach(() => {
    let store ={};

    spyOn(localStorage, 'getItem').and.callFake(function(key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function(key, value) {
      store[key]= value;
    });
  });

  function contactArray(){
    return [
      new Contact(1, 'FN', 'LN', '534', 'Address', 'city'),
      new Contact(2, 'FN', 'LN', '534', 'Address', 'city'),
      new Contact(3, 'FN', 'LN', '534', 'Address', 'city')
    ]
  }
*/

/*

  it('Should do something', inject([ContactLocalstorageService], (service: ContactLocalstorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#loadContacts Should returns all contacts', inject([ContactLocalstorageService], (service: ContactLocalstorageService) => {
    let contacts = contactArray();
    let contactsIds = _.map(contacts, 'id');
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.loadContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);

      _.forEach(contacts, function(c){
        expect(contactsIds).toBe(c.id);
      });
    });
  }));


  //dont work
   it ('#saveContact Should returns contact object', inject([ContactLocalstorageService], (service: ContactLocalstorageService) => {
   let contact = new Contact(4, 'FirstName', 'LastName', '21321313', '544', '45');
   let contacts = contactArray();
    contacts.push(contact);
     localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    // let contactsIds = _.map(contacts, 'id');
     service.saveContacts().subscribe((contacts: Contact[]) => {
       expect(contacts.length).toBe(3);

   });
   }));


});
*/
