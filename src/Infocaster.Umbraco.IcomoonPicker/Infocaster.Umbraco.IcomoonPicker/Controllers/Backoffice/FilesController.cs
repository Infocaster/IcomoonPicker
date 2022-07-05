using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Umbraco.Cms.Web.BackOffice.Controllers;
using Umbraco.Cms.Web.Common.Attributes;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;

namespace Infocaster.Umbraco.IcomoonPicker.Controllers.Backoffice
{
    [PluginController("icomoon")]
    public class FilesController : UmbracoAuthorizedApiController
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public FilesController(IHttpClientFactory httpClientFactory) => 
            _httpClientFactory = httpClientFactory;
        

        [HttpGet]
        public async Task<ActionResult> Svg([FromUri] string code, [FromUri] string project)
        {
            var _client = _httpClientFactory.CreateClient();
            var result = await _client.GetAsync($"https://i.icomoon.io/public/{code}/{project}/symbol-defs.svg");
            result.EnsureSuccessStatusCode();
            var resultAsString = await result.Content.ReadAsStringAsync();

            return Ok(resultAsString);
        }
    }
}
