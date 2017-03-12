using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YappStyle.Interfaces;
using YappStyle.Models;

namespace YappStyle.Controllers.Base
{
    public class BaseController<TRepository, TWebModel> : Controller
      where TRepository : IWebRepository<TWebModel>
      where TWebModel : class, IWebModel
    {
        private readonly TRepository _repo;

        public BaseController(TRepository repo)
        {
            _repo = repo;
        }

        [Route("get/all")]
        [HttpPost]
        public virtual async Task<IActionResult> GetAll([FromBody]List<QueryModel> searchModels)
        {

            var models = new List<TWebModel>();

            try
            {
                models = await _repo.GetAll(searchModels);
            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }

            return Ok(models);
        }

        [Route("get")]
        public virtual async Task<IActionResult> GetAll()
        {

            var models = new List<TWebModel>();

            try
            {
                models = await _repo.GetAll();
            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }

            return Ok(models);
        }

        [Route("get/{identifier}")]
        [HttpGet]
        public virtual async Task<IActionResult> GetByIdentifier(string identifier)
        {
            TWebModel model;

            try
            {
                model = await _repo.GetByIdentifier(identifier);
            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }

            return Ok(model);
        }


        [Route("update/{identifier}")]
        [HttpPost]
        public virtual async Task<IActionResult> Update(string identifier, [FromBody]TWebModel model)
        {
            TWebModel result;

            try
            {
                result = await _repo.Update(identifier, model);
            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }

            return Ok(result);
        }


        [Route("add")]
        [HttpPost]
        public virtual async Task<IActionResult> Create([FromBody]TWebModel model)
        {
            TWebModel result;

            try
            {
                result = await _repo.Create(model);
            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }

            return Ok(result);
        }

    }
}
