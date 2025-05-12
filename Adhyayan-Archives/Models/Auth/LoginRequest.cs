using System.ComponentModel.DataAnnotations;

namespace Adhyayan_Archives.Models.Auth
{
    public class LoginRequest
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}