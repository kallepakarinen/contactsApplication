using WebApi.Model;
using System.Linq;


namespace WebApi.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _context;

        public UserRepository(DatabaseContext context)
        {
            _context = context;
            var user = new User("admin", "admin", "Kalle", "Pakarinen", "esimerkki@jotain.com");
            if (FindByUsername(user.Username) == null)
            {
                _context.User.Add(user);
                _context.SaveChanges();
            }
        }

        public User FindById(int id)
        {
            var user = _context.User.FirstOrDefault(u => u.Id == id);
            return user;
        }

        public User FindByUsername(string username)
        {
            return _context.User.FirstOrDefault(u => u.Username == username);
        }

        public User FindByUsernameAndPassword(string username, string password)
        {
            return _context.User.FirstOrDefault(u => u.Username == username && u.Password == password);
        }

        public void Add(User user)
        {
            _context.Add(user);
            _context.SaveChanges();
        }

        public void Update(User user)
        {
            _context.Update(user);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            _context.Remove(FindById(id));
            _context.SaveChanges();
        }
    }
}