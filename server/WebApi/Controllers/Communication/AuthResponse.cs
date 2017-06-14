namespace WebApi.Controllers.Communication
{
    public class AuthResponse
    {
        public string UserId { get; set; }
        public string Token { get; set; }

        public AuthResponse(string userid, string token)
        {
            UserId = userid;
            Token = token;
        }
    }
}