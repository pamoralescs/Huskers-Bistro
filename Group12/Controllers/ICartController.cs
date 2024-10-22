using Group12.Models;
using Microsoft.AspNetCore.Mvc;

namespace Group12.Controllers
{
    public interface ICartController
    {
        public List<double> CartTotals();

        public double GetSubTotal(List<double> result);

        public double GetTaxTotal(double subtotal);

        public double GetCartTotal(List<double> result);

        public IActionResult GetsubTotalConvert();

        public IActionResult GetTaxTotalConvert();

        public IActionResult GetCartTotalConver();

        public double Get10OffSaleTotal(List<double> result);

        public IActionResult CreateCartItem(CartModel cart);

        public IActionResult DeleteCartItem(CartModel cart);

        public IActionResult DeleteAllCartItem();

        public IActionResult CartItemsList();

    }
}
