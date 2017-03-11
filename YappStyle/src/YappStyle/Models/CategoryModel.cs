using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;

namespace YappStyle.Models
{
    public class CategoryModel : IWebModel
    {

        public string Name { get; set; }

        public string Description { get; set; }

        public List<ProductModel> Products { get; set; }
    }
}
