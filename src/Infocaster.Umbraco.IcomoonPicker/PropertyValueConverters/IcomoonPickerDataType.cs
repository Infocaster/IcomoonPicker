using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.PropertyEditors.Validators;
using Umbraco.Cms.Core.Services;

namespace Infocaster.Umbraco.IcomoonPicker.PropertyValueConverters
{
    [DataEditor(
        alias: "Infocaster.IcomoonPicker",
        name: "Icomoon icon picker",
        view: "~/App_Plugins/Infocaster.Umbraco.IcomoonPicker/editor/editor.html",
        ValueType = ValueTypes.String)]
    public class IcomoonPickerDataType : DataEditor
    {
        private readonly IIOHelper _ioHelper;
        private readonly IEditorConfigurationParser _editorConfigurationParser;
        private readonly ILocalizedTextService _textService;

        public IcomoonPickerDataType(
            IDataValueEditorFactory dataValueEditorFactory,
            IIOHelper ioHelper,
            IEditorConfigurationParser editorConfigurationParser,
            ILocalizedTextService textService)
            : base(dataValueEditorFactory)
        {
            _ioHelper = ioHelper;
            _editorConfigurationParser = editorConfigurationParser;
            _textService = textService;
        }

        protected override IConfigurationEditor CreateConfigurationEditor()
        {
            return new IcomoonPickerConfigurationEditor(_ioHelper, _editorConfigurationParser, _textService);
        }
    }

    public class IcomoonPickerConfigurationEditor
        : ConfigurationEditor<IcomoonPickerConfiguration>
    {
        public IcomoonPickerConfigurationEditor(IIOHelper ioHelper, IEditorConfigurationParser editorConfigurationParser, ILocalizedTextService textService)
            : base(ioHelper, editorConfigurationParser)
        {
            Field(nameof(IcomoonPickerConfiguration.ProjectName)).Validators.Add(new RequiredValidator(textService));
            Field(nameof(IcomoonPickerConfiguration.ProjectCode)).Validators.Add(new RequiredValidator(textService));
        }
    }

    public class IcomoonPickerConfiguration
    {
        [ConfigurationField("projectName", "Project name", "requiredfield", Description = "The name of the project in icomoon")]
        public string ProjectName { get; set; }

        [ConfigurationField("projectCode", "Project code", "requiredfield", Description = "The code that is associated with this project in icomoon")]
        public string ProjectCode { get; set; }
    }
}
