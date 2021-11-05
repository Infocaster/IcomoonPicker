using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Umbraco.Web.Mvc;
using Umbraco.Web.WebApi;

namespace IMG.Controllers.Backoffice
{
    [PluginController("icomoon")]
    public class FilesController : UmbracoAuthorizedApiController
    {
        private static readonly HttpClient _client = new HttpClient();

        [HttpGet]
        public async Task<IHttpActionResult> Svg([FromUri] string code, [FromUri] string project)
        {
            var result = await _client.GetAsync($"https://i.icomoon.io/public/{code}/{project}/symbol-defs.svg");
            result.EnsureSuccessStatusCode();

            return Ok(await result.Content.ReadAsStringAsync());
        }
    }
}