import { off } from 'process';
import { send } from './mailer';

//
interface Pet {
  name: string;
}

//
interface Address {
  city: string;
}

//
interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
  address?: Address[];
}
//
const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'nguyen van a',
  phone: '0123123',
};

contacts.push(newContact);
//cách 1
if (newContact.email) {
  send(newContact.email, newContact.name, newContact.phone);
}

function getPetName(contact: Contact) {
  return contact.pet?.name; //string | undefined
}

function getAddress(contact: Contact) {
  return contact.address?.[0];
}

console.log(getAddress(newContact)?.city);
