import { ContactAddressPipe } from './contact-address.pipe';
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {
  let pipe = new ContactAddressPipe();

it('should return address and city', () => {
  let contact = new Contact(1, 'FirstName', 'LastName', '21321313', 'Address 1', 'Lappeenranta');
  expect(pipe.transform(contact)).toBe(contact.address + ', ' + contact.city);
})

  it('should return address', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '21321313', '544', '');
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  })

});



 /*     //result address
it('should return address', () => {
  let contact = new Contact(1, 'FirstName', 'LastName', '21321313', 'Address 1', '');
  expect(pipe.transform(contact)).toBe(contact.address);
  contact.city = null;
  expect(pipe.transform(contact)).toBe(contact.address);
})

  it('should return empty string', () => {
  let contact = new Contact(1, 'FirstName', 'LastName', '21321313', '', '');
  expect(pipe.transform(contact)).toBe('');
  expect(pipe.transform(null)).toBe('');
  })

*/
