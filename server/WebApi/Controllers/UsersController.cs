using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using Microsoft.AspNetCore.Cors;


namespace WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/login")]
    [Authorize("Bearer")]
    public class UsersController : Controller
    {

        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPut]
        public IActionResult Login()
        {
            var user = _userService.FindUserByUsername(User.Identity.Name);
            if (user != null)
            {
                return new JsonResult(new
                {
                    user.Username,
                    user.Email,
                    user.FirstName,
                    user.LastName
                });
            }
            return null;
        }
    }
}