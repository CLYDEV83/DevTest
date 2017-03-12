using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;
using YappStyle.Models;

namespace YappStyle.Repositories.Base
{
    public class WebRepository<TWebModel> : IWebRepository<TWebModel>
        where TWebModel : class, IWebModel
    {
        private readonly IDataSource _dataSource;

        public WebRepository(IDataSource dataSource)
        {
            _dataSource = dataSource;
        }

        public virtual Task<TWebModel> Create(TWebModel model)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<List<TWebModel>> GetAll(List<QueryModel> model)
        {
            return await GetAll();
        }

        public virtual async Task<List<TWebModel>> GetAll()
        {
            var dataList = await _dataSource.DesrializeObjects();

            var models = new List<TWebModel>();

            var data = dataList.ModelList.ToList();

            data.ForEach(o => models.Add(o as TWebModel));

            return models;
        }

        public virtual Task<TWebModel> GetByIdentifier(string identifier)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<IDataSet> GetData()
        {
            var dataList = await _dataSource.DesrializeObjects();

            return dataList;
        }

        public virtual Task<TWebModel> Update(string name, TWebModel model)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<string> SerializeData(DataListModel data)
        {
            var result = await _dataSource.SerializeObjects(data);

            return result;
        }

        public void SaveData(string file)
        {
            _dataSource.WriteToFile(file);
        }

    }
}
