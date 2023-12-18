using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Cms.Core.Manifest;

namespace Infocaster.Umbraco.IcomoonPicker.Assets
{
    internal class IcomoonManifestFilter
        : IManifestFilter
    {
        public void Filter(List<PackageManifest> manifests)
        {
            manifests.Add(new PackageManifest
            {
                PackageName = "Icomoon icon picker",
                Version = Assembly.GetExecutingAssembly().GetName().Version?.ToString() ?? "1.0.0",
                Scripts = new[]
                {
                    Defaults_IcomoonPicker.PluginBasePath + "/script.iife.js"
                },
                BundleOptions = BundleOptions.None
            });
        }
    }
}
