using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YappStyle.Models;

namespace YappStyle.Interfaces
{
    public interface IWebRepository<TWebModel>
    {
        Task<List<TWebModel>> GetAll(List<QueryModel> model);

        Task<List<TWebModel>> GetAll();

        Task<TWebModel> Update(string name, TWebModel model);

        Task<TWebModel> Create(TWebModel model);

        Task<TWebModel> GetByIdentifier(string identifier);

    }
}
