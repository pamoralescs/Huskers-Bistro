using Group12.Models;
using Microsoft.AspNetCore.Mvc;

namespace Group12.Controllers
{
    public interface ICustomerController
    {
        public IActionResult Register(CustomerModel customer);

        public IActionResult Login(CustomerModel customer);
    }
}