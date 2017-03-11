using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.DataSource;
using YappStyle.Models;

namespace YappStyle.Interfaces
{
    public interface IDataSource
    {
        Task<DataListModel> DesrializeObjects();

        Task<string> SerializeObjects(DataListModel obj);

        void WriteToFile(string file);
    }
}
