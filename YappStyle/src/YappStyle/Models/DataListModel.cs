using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;

namespace YappStyle.Models
{
    public class DataListModel : IDataSet
    {
        [JsonProperty("Categories")]
        public List<CategoryModel> ModelList { get; set; }
    }
}
