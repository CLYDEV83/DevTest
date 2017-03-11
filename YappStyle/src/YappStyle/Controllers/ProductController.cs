using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Controllers.Base;
using YappStyle.Interfaces;
using YappStyle.Models;
using YappStyle.Repositories;

namespace YappStyle.Controllers
{
    [Route("api/product")]
    public class ProductController : BaseController<ProductRepository, ProductModel>
    {
        public ProductController(ProductRepository repo) : base(repo)
        {
        }

 
    }
}
