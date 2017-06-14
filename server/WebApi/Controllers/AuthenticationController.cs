using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using WebApi.Services;
using WebApi.Config;
using WebApi.Controllers.Communication;
using WebApi.Model;

namespace WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            var user = _userService.FindUserByUsernameAndPassword(authRequest.Username, authRequest.Password);
            if (user == null) return Unauthorized();
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    }
}
