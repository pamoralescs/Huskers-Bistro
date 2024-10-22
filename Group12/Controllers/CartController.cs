using Group12.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace Group12.Controllers
{
    [Route("api/cart")]
    [ApiController]
    public class CartController : ControllerBase, ICartController
    {
        public List<double> CartTotals()
        {
            SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
            SqlCommand cmd = new SqlCommand("SELECT price FROM Cart C JOIN Item I ON C.itemId = I.itemId;", conn);
            conn.Open();
            SqlDataReader reader = cmd.ExecuteReader();
            List<double> result = new List<double>();
            while (reader.Read())
            {
                result.Add(Convert.ToDouble(reader["price"]));
            }
            reader.Close();
            conn.Close();
            var subtotal = GetSubTotal(result);
            var tax = GetTaxTotal(subtotal);
            var total = GetCartTotal(result);
            List<double> totalslst = new List<double> { subtotal, tax, total };
            return totalslst;

        }

        //logic for getting the total of all items in the cart
        public double GetSubTotal(List<double> result)
        {
            if (result != null)
            {
                double totalPrice = 0;
                foreach (double price in result)
                {
                    totalPrice += price;
                }
                return Math.Round(totalPrice, 2);
            }
            else
            {
                return 0.00;
            }

        }

        //logic for getting the tax total for the cart
        public double GetTaxTotal(double subtotal)
        {
            double tax = subtotal * 0.0725;//lincoln's current sales tax rate
            tax = Math.Round(tax, 2);
            return tax;

        }

        //logic for getting the total of the cart with tax included
        public double GetCartTotal(List<double> result)
        {
            if (result != null)
            {
                var itemtotal = GetSubTotal(result);
                var tax = GetTaxTotal(itemtotal);
                double itemtotalPrice = Convert.ToDouble(itemtotal);
                double taxPrice = Convert.ToDouble(tax);
                double total = itemtotalPrice + taxPrice;
                return total;
            }
            else
            {
                return 0.0;
            }

        }

        //converting the subtotal to an IActionResult for front end
        [HttpGet("subtotal")]
        public IActionResult GetsubTotalConvert()
        {
            List<double> totallst = CartTotals();
            var subtotal = totallst[0];
            return Ok(subtotal);
        }

        //converting the tax total to an IActionResult for front end
        [HttpGet("taxtotal")]
        public IActionResult GetTaxTotalConvert()
        {
            var totallst = CartTotals();
            double tax = totallst[1];
            return Ok(tax);
        }

        //converting the cart total to an IActionResult for front end
        [HttpGet("carttotal")]
        public IActionResult GetCartTotalConver()
        {
            var totallst = CartTotals();
            double total = totallst[2];
            return Ok(total);
        }

        //here if we want to implement a sale for the total cart
        [HttpGet("carttotal10off")]
        public double Get10OffSaleTotal(List<double> result)
        {
            if (result != null)
            {
                double subtotal = GetSubTotal(result);
                double salesubtotal = subtotal * 0.90; //10% off sale
                double tax = GetTaxTotal(salesubtotal);
                double salescarttotal = salesubtotal + tax;
                return salescarttotal;
            }
            else
            {
                return 0.0;
            }

        }

        [HttpPost("createcartitem")]
        public IActionResult CreateCartItem(CartModel cart)
        {
            string msg;
            string query;
            try
            {
                SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
                query = "INSERT INTO [Cart] (itemId) VALUES (@itemId)";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@itemId", cart.itemId);
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Item Added.";
                }

                else
                {
                    msg = "Item Not Added.";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return Ok(msg);

        }

        [HttpPost("deletecartitem")]
        public IActionResult DeleteCartItem(CartModel cart)
        {
            string msg;
            string query;
            try
            {
                SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
                query = "DELETE FROM [Cart] WHERE itemId = (@itemId)";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@itemId", cart.itemId);
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Item Removed.";
                }
                else
                {
                    msg = "Item Removed.";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return Ok(msg);
        }

        [HttpPost("deleteallcartitems")]
        public IActionResult DeleteAllCartItem()
        {
            string msg;
            string query;
            try
            {
                SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
                query = "DELETE FROM [Cart]";
                SqlCommand cmd = new SqlCommand(query, conn);
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Items Removed.";
                }
                else
                {
                    msg = "Items not Removed.";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return Ok(msg);
        }

        [HttpGet("cartitemslist")]
        public IActionResult CartItemsList()
        {
            SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
            List<ItemModel>? listItems = new List<ItemModel>();
            SqlDataAdapter da = new SqlDataAdapter("SELECT I.itemId, I.itemName, I.category, I.price, I.image, I.description FROM Cart C JOIN Item I ON C.itemId = I.itemId", conn);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    ItemModel itms = new ItemModel();
                    itms.itemId = Convert.ToInt32(dt.Rows[i]["itemId"]);
                    itms.itemName = Convert.ToString(dt.Rows[i]["itemName"]);
                    itms.category = Convert.ToString(dt.Rows[i]["category"]);
                    itms.price = Convert.ToDecimal(dt.Rows[i]["price"]);
                    itms.image = Convert.ToString(dt.Rows[i]["image"]);
                    itms.description = Convert.ToString(dt.Rows[i]["description"]);
                    listItems.Add(itms);
                }
            }
            return Ok(listItems);
        }
    }
}
