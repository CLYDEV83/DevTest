using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;

namespace YappStyle.Models
{
    public class QueryModel : ISearchFilter
    {
        public string FieldName { get; set; }

        public string SearchValue { get; set; }
    }
}
