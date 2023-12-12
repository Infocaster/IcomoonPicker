using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Infocaster.Umbraco.IcomoonPicker.Composers
{
    public class IcomoonPickerComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.BackOfficeAssets()
                .Append<ScriptAsset>();
            builder.Services.AddHttpClient();
        }
    }
}
