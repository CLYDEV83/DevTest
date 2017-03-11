using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;

namespace YappStyle.Models
{
    public class ProductModel : IWebModel
    {

        public string Name { get; set; }

        public double UnitPrice { get; set; }
  
        public string ProductCode { get; set; }

        public string CategoryName { get; set; }
    }
}
