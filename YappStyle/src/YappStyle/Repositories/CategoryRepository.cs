using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;
using YappStyle.Models;
using YappStyle.Repositories.Base;
using Microsoft.Extensions.DependencyInjection;

namespace YappStyle.Repositories
{
    public class CategoryRepository : WebRepository<CategoryModel>
    {
        public CategoryRepository(IDataSource dataSet) : base(dataSet)
        {
            
        }

        public override async Task<List<CategoryModel>> GetAll()
        {
            return await base.GetAll();
        }

        public override async Task<CategoryModel> Create(CategoryModel model)
        {

            var data = await base.GetData();

            var categoryList = data as DataListModel;

            categoryList.ModelList.Add(model);

            var json = JsonConvert.SerializeObject(categoryList);

            SaveData(json);

            var newCategory = await GetByIdentifier(model.Name);

            return newCategory;
        }

        public override async Task<CategoryModel> GetByIdentifier(string identifier)
        {
            var data = await base.GetAll();

            var category = data.Where(o => o.Name == identifier).FirstOrDefault();

            return category;
        }

        public override async Task<CategoryModel> Update(string name, CategoryModel model)
        {

            var data = await base.GetData();

            var dataList = data as DataListModel;

            foreach (var item in dataList.ModelList.Where(o => o.Name == name))
            {
                item.Name = model.Name;
                item.Description = model.Description;
            }

            var json = await SerializeData(dataList);

            SaveData(json);

            var updatedCategory = await GetByIdentifier(model.Name);

            return updatedCategory;
        }

    }

}
