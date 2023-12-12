using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Umbraco.Cms.Core.WebAssets;

namespace Infocaster.Umbraco.IcomoonPicker
{
    internal class ScriptAsset
        : JavaScriptFile
    {
        public ScriptAsset() : base(Defaults_IcomoonPicker.PluginBasePath + "/script.iife.js")
        { }
    }
}
