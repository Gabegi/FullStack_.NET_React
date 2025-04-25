
using eShop.API.Data;
using eShop.API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(StoreContext context) : ControllerBase
    {
        [HttpGet] 
        public ActionResult<List<Product>> GetProducts()
        {
            return context.Products.ToList();
        }
    }
}
