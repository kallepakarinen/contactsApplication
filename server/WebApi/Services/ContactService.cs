using System;
using System.Collections.Generic;
using WebApi.Model;
using WebApi.Repository;

namespace WebApi.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindAllContacts()
        {
            return _contactRepository.FindAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.FindById(id);
        }

        public void CreateContact(Contact contact)
        {
            _contactRepository.Create(contact);
        }

        public void UpdateContact(Contact contact)
        {
            _contactRepository.Update(contact);
        }

        public void DeleteContact(int id)
        {
            _contactRepository.Delete(id);
        }

 
        /*
public void UpdateContact(int id, Contact contact)
{
   throw new NotImplementedException();
}*/


        /*
        private readonly List<Contact> _contacts;

        public ContactService()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Kalle", "Pakarinen", "0123456798", "Myllärinmäki 4", "Lappeenranta"),
                new Contact(2, "Olli", "Friman", "987654321", "Happotie 6", "Lappeenranta")
            };
        }

        public List<Contact> FindAllContacts()
        {
            return _contacts;
        }

        public Contact FindContactById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public void CreateContact(Contact contact)
        {
            _contacts.Add(new Contact(
                GetId(),
                contact.FirstName,
                contact.LastName,
                contact.Phone,
                contact.Address,
                contact.City));
        }

        public void UpdateContact(int id, Contact contact)
        {
            var index = _contacts.FindIndex(c => c.Id == id);
            _contacts[index] = contact;
        }

        public void DeleteContact(int id)
        {
            _contacts.RemoveAll(c => c.Id == id);
        }

        private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(c => c.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }*/
    }
}
