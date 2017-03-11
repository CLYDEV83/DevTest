using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;
using YappStyle.Models;

namespace YappStyle.DataSource
{
    public class DataSourceFactory : IDataSource
    {
        public async Task<DataListModel> DesrializeObjects()
        {
            string path = @".\DataSource\ProductCatalogue.json";

            var model = JsonConvert.DeserializeObject<DataListModel>(File.ReadAllText(path));

            return await Task.FromResult(model);
        }

        public async Task<string> SerializeObjects(DataListModel obj)
        {
            var json = JsonConvert.SerializeObject(obj);

            return await Task.FromResult(json);
        }

        public void WriteToFile(string file)
        {

            string path = @".\DataSource\ProductCatalogue.json";

            File.WriteAllText(path, file);
        }
    }
}
