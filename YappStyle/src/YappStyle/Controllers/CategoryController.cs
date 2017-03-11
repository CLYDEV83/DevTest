using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YappStyle.Controllers.Base;
using YappStyle.Models;
using YappStyle.Repositories;
using YappStyle.Interfaces;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace YappStyle.Controllers
{
    [Route("api/category")]
    public class CategoryController : BaseController<CategoryRepository, CategoryModel>
    {
        public CategoryController(CategoryRepository repo) : base(repo)
        {
        }

    }
}
