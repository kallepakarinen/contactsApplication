export class Contact {

  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, address?: string, city?: string) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
    this.city = city;
  }
}

