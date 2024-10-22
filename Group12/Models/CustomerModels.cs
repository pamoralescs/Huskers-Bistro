using Group12.Controllers;
using System.Data.SqlClient;
using System.Data;
using System.Collections.Generic;
using System.Numerics;

namespace Group12.Models
{
    public class CustomerModel
    {
        public int customerId { get; set; }

        public string? firstName { get; set; }

        public string? lastName { get; set; }

        public string? email { get; set; }

        public string? phoneNumber { get; set; }

        public string? password { get; set; } 
    }
}