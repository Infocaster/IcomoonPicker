using System;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace Infocaster.Umbraco.IcomoonPicker.PropertyValueConverters
{
    public class IcomoonPickerPropertyValueConverter : IPropertyValueConverter
    {
        public object ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType, PropertyCacheLevel referenceCacheLevel, object inter, bool preview)
        {
            return inter;
        }

        public object ConvertIntermediateToXPath(IPublishedElement owner, IPublishedPropertyType propertyType, PropertyCacheLevel referenceCacheLevel, object inter, bool preview)
        {
            return inter?.ToString() ?? String.Empty;
        }

        public object ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType, object source, bool preview)
        {
            var attemptString = source.TryConvertTo<string>();
            return attemptString.Success && attemptString.Result is not null ? attemptString.Result : null;
        }

        public PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
        {
            //Elements level properties get reevaluated when any element is modified.
            return PropertyCacheLevel.Elements;
        }

        public Type GetPropertyValueType(IPublishedPropertyType propertyType)
        {
            return typeof(string);
        }

        public bool IsConverter(IPublishedPropertyType propertyType)
        {
            return propertyType.EditorAlias == Defaults_IcomoonPicker.PropertyEditorAlias;
        }

        public bool? IsValue(object value, PropertyValueLevel level)
        {
            //copied directly from the PropertyValueConverterBase class as described in the documentation on Our.Umbraco.
            switch (level)
            {
                case PropertyValueLevel.Source:
                    return value != null && (!(value is string stringValue) || !string.IsNullOrWhiteSpace(stringValue));
                case PropertyValueLevel.Inter:
                    return null;
                case PropertyValueLevel.Object:
                    return null;
                default:
                    throw new NotSupportedException($"Invalid level: {level}.");
            }
        }
    }
}
