using Group12.Controllers;


namespace MSTestProjects
{
    [TestClass]
    public class CartControllerTests
    {

        [TestMethod]
        public void GetSUbTotalTest_empty_lst_should_return_0()
        {
            List<double> empty = new List<double>();
            CartController cartController = new CartController();
            var result = cartController.GetSubTotal(empty);
            Assert.AreEqual(0.0, result);

        }


        [TestMethod]
        public void GetSubTotalTest_lst_with_values_should_return_total()
        {
            List<double> lst = new List<double> { 1.0, 2.0, 3.0 };
            CartController cartController = new CartController();
            var result = cartController.GetSubTotal(lst);
            Assert.AreEqual(6.0, result);

        }

        [TestMethod]
        public void GetTaxTotalTest_value_should_return_tax_value()
        {
            double total = 100;
            CartController cartController = new CartController();
            var result = cartController.GetTaxTotal(total);
            Assert.AreEqual(7.25, result);

        }

        [TestMethod]
        public void GetCartTotalTest_lst_with_values_should_return_total_with_tax_added()
        {
            List<double> lst = new List<double> { 1.0, 2.0, 3.0 };
            CartController cartController = new CartController();
            var result = cartController.GetCartTotal(lst);
            Assert.AreEqual(6.43, result);

        }
        [TestMethod]
        public void GetCartTotalTest_empty_lst_should_return_0()
        {
            List<double> empty = new List<double>();
            CartController cartController = new CartController();
            var result = cartController.GetCartTotal(empty);
            Assert.AreEqual(0.0, result);

        }

        [TestMethod]
        public void Get10OffSaleTotalTest_lst_with_values_should_return_total_with_tax_added()
        {
            List<double> lst = new List<double> { 1.0, 2.0, 3.0 };
            CartController cartController = new CartController();
            var result = cartController.Get10OffSaleTotal(lst);
            Assert.AreEqual(5.79, result);

        }

        [TestMethod]
        public void Get10OffSaleTotalTest_empty_lst_should_return_0()
        {
            List<double> empty = new List<double>();
            CartController cartController = new CartController();
            var result = cartController.Get10OffSaleTotal(empty);
            Assert.AreEqual(0.0, result);
        }


    }
}
