using Microsoft.AspNetCore.Mvc;
using YappStyle.Controllers.Base;
using YappStyle.Models;
using YappStyle.Repositories;


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
