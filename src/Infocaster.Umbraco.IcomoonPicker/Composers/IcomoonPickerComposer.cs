using Infocaster.Umbraco.IcomoonPicker.Assets;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Infocaster.Umbraco.IcomoonPicker.Composers
{
    public class IcomoonPickerComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.ManifestFilters()
                .Append<IcomoonManifestFilter>();
            builder.Services.AddHttpClient();
        }
    }
}
