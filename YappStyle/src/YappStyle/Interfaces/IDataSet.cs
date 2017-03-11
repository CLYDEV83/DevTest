using System.Collections.Generic;
using System.Linq;
using YappStyle.Models;

namespace YappStyle.Interfaces
{
    public interface IDataSet
    {
        List<CategoryModel> ModelList { get; set; }
    }
}