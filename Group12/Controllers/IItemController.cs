using Group12.Models;
using Microsoft.AspNetCore.Mvc;

namespace Group12.Controllers
{
    public interface IItemController
    {
        public IActionResult GetAllItems();
    }
}