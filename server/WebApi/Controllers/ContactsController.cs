using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.model;
using WebApi.Services;
using System.Diagnostics;

namespace WebApi.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        // private static ContactService _contactService = new ContactService();
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }
        // GET api/contacts
        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }
        
        // GET api/contacts/1
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactService.CreateContact(contact);
        }

        // PUT api/contacts/
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Contact contact)
        {
          _contactService.UpdateContact(contact);
        }

        // DELETE api/contacts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactService.DeleteContact(id);
        }
    }
}
