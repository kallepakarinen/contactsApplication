using System.ComponentModel.DataAnnotations;

namespace WebApi.model
{
    public class Contact
    {

        public Contact() { }

        public Contact(int id, string firstName, string lastName, string phone, string address, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Address = address;
            City = city;
        }
        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string City { get; set; }
    }
}

