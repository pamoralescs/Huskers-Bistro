using System.Data.SqlClient;

namespace Group12.Models
{
    class ConnectionString
    {
        public static string GetConnectionString(string keyName)
        {
            string connection = string.Empty;
            switch (keyName)
            {
                case "DBConnectionString":
                    connection = System.Configuration.ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
                    break;
                default:
                    break;
            }
            return connection;
        }
    }
}

