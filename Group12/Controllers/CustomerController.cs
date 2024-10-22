using Microsoft.AspNetCore.Mvc;
using Group12.Models;
using System.Data.SqlClient;
using System.Data;

namespace Group12.Controllers
{
    [ApiController]
    [Route("api/customer")]
    public class CustomerController : ControllerBase, ICustomerController
    {
        [HttpPost("registration")]
        public IActionResult Register(CustomerModel customer)
        {
            string msg;
            string query;
            try
            {
                SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
                query = "SELECT * FROM [Customer] WHERE email = @email";
                SqlDataAdapter da = new SqlDataAdapter(query, conn);
                da.SelectCommand.Parameters.AddWithValue("@email", customer.email);
                da.SelectCommand.Parameters.AddWithValue("@password", customer.password);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count < 1)
                {
                    query = "INSERT INTO [Customer] (firstName, lastName, email, phoneNumber, password) VALUES (@firstName, @lastName, @email, @phoneNumber, @password)";
                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.Parameters.AddWithValue("@firstName", customer.firstName);
                    cmd.Parameters.AddWithValue("@lastName", customer.lastName);
                    cmd.Parameters.AddWithValue("@email", customer.email);
                    cmd.Parameters.AddWithValue("@phoneNumber", customer.phoneNumber);
                    cmd.Parameters.AddWithValue("@password", customer.password);

                    conn.Open();
                    int i = cmd.ExecuteNonQuery();
                    conn.Close();
                    if (i > 0)
                    {
                        msg = "Data inserted";
                    }
                    else
                    {
                        msg = "Data not inserted.";
                    }
                }
                else
                {
                    msg = "User already exists under that email.";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return Ok(msg);
        }

        [HttpPost("login")]
        public IActionResult Login(CustomerModel customer)
        {
            string msg;
            try
            {
                SqlConnection conn = new SqlConnection(ConnectionString.GetConnectionString("DBConnectionString"));
                string query = "SELECT * FROM [Customer] WHERE email = @email and password = @password";
                SqlDataAdapter da = new SqlDataAdapter(query, conn);
                da.SelectCommand.Parameters.AddWithValue("@email", customer.email);
                da.SelectCommand.Parameters.AddWithValue("@password", customer.password);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    msg = "Login successful";
                }
                else
                {
                    msg = "Login failed.";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return Ok(msg);
        }

    }
}
