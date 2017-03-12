using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Interfaces;
using YappStyle.Models;
using YappStyle.Repositories.Base;

namespace YappStyle.Repositories
{
    public class ProductRepository : WebRepository<ProductModel>
    {
        public ProductRepository(IDataSource dataSet) : base(dataSet)
        {
        }

        public override async Task<List<ProductModel>> GetAll()
        {
            return await GetBaseList();
        }

        public override async Task<List<ProductModel>> GetAll(List<QueryModel> model)
        {

            var q = await GetBaseList();
         
            foreach (var searchParam in model)
            {
                switch (searchParam.FieldName)
                {
                    case "SearchText":
                        var searchText = searchParam.SearchValue;
                        if (!string.IsNullOrWhiteSpace(searchText)) q = q.Where(o => o.Name.ToLower().Contains(searchText) || o.ProductCode.ToLower().Contains(searchText)).ToList();
                        break;
                    case "Category":
                        var category = searchParam.SearchValue;
                        if (!string.IsNullOrWhiteSpace(category)) q = q.Where(o => o.CategoryName.StartsWith(category)).ToList();
                        break;
                }
            }


            return q;
        }

        public async Task<List<ProductModel>> GetBaseList()
        {
            var products = new List<ProductModel>();

            var data = await base.GetData();

            var categoryList = data as DataListModel;

            var categoryModels = categoryList.ModelList;
                 
            foreach (var item in categoryModels)
            {
                products.AddRange(item.Products.Select(o => new ProductModel
                {
                    CategoryName = item.Name,
                    Name = o.Name,
                    ProductCode = o.ProductCode,
                    UnitPrice = o.UnitPrice

                }));
            }


            return products;
        }

        public override async Task<ProductModel> GetByIdentifier(string identifier)
        {
            var data = await GetBaseList();

            var product = data.Where(o => o.ProductCode == identifier).FirstOrDefault();

            return product;
        }

        public override async Task<ProductModel> Update(string productCode, ProductModel model)
        {
           var data = await base.GetData();

           var categoryList = data as DataListModel;

            foreach (var item in categoryList.ModelList.SelectMany(c => c.Products).Where(p => p.ProductCode == productCode))
            {
                item.Name = model.Name;
                item.UnitPrice = model.UnitPrice;
            }

            var json = await SerializeData(categoryList);

            SaveData(json);
    
            return model;
        }

        public override async Task<ProductModel> Create(ProductModel model)
        {
            var data = await base.GetData();

            var categoryList = data as DataListModel;

            categoryList.ModelList.Where(o => o.Name == model.CategoryName).FirstOrDefault().Products.Add(model);

            var json = await SerializeData(categoryList);

            SaveData(json);

            var newProduct = await GetByIdentifier(model.ProductCode);

            return newProduct;
        }
    }
}

