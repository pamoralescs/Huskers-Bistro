using Microsoft.AspNetCore.Mvc;
using Group12.Models;
using System.Data.SqlClient;
using System.Data;

namespace Group12.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class ItemController : ControllerBase, IItemController
    {
        [HttpGet("getallitems")]
        public IActionResult GetAllItems()
        {
            SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
            List<ItemModel>? listItems = new List<ItemModel>();
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Item;", conn);
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

