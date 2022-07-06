<h3 align="center">
<img height="100" src="https://raw.githubusercontent.com/Infocaster/.github/main/assets/infocaster_nuget_pink.svg">
</h3>

<h1 align="center">
Icomoon icon picker

[![Downloads](https://img.shields.io/nuget/dt/IcomoonPicker?color=ff0069)](https://www.nuget.org/packages/IcomoonPicker/)
[![Nuget (with prereleases)](https://img.shields.io/nuget/vpre/IcomoonPicker?color=ffc800)](https://www.nuget.org/packages/IcomoonPicker/)
![GitHub](https://img.shields.io/github/license/Infocaster/IcomoonPicker?color=ff0069)

</h1>

The Icomoon icon picker allows you to use an Icomoon project to create your own icons and import them into Umbraco via a custom Property Editor.
This package gives the content editor complete control over which icons can be used on their website and select them themselves.

## Requirements
The Icomoon icon picker requires you to set up an Icomoon account.

## Getting started
The Icomoon icon picker is available via [NuGet](https://www.nuget.org/packages/IcomoonPicker/).

## Installation
Installing the Icomoon icon picker is quick and easy, just install the NuGet package and follow these steps:

1. Go to the backoffice and create a new Data Type.
2. There should be a new Property Type called `Icomoon icon picker`.
3. Select this new Property Type and enter the name and code of your Icomoon project (these can be found [here](https://icomoon.io/app/#/select/image) in the url shown under Development Links and Production Links. The code is the part after `public` in the URL). 
4. Save the Property Type. It is now available to use in any Document Type you want!

## How to use
After creating the DataType and adding it to a Document Type the icon can be selected by the content editor like this:

![Add icon](assets/screenshots/add_icon.png)

After selecting an icon the model will now contain a string with the correct value.
Assuming the value in your model is called `Icon` the icon can be used as shown below.

```
<svg class="icon @Icon">
    <use xlink:href="#@Icon"></use>
</svg>
```

This functionality is great to use for things like nested content too, in the following image the Icomoon icon picker is used in some nested content. This gives the content editor a lot of variety!
![Add icon](assets/screenshots/example_multiple_icons.png)

## Credits
Created by [Infocaster](https://infocaster.net)

<a href="https://github.com/Infocaster/IcomoonPicker/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Infocaster/IcomoonPicker" />
</a>

*Made with [contributors-img](https://contrib.rocks).*

-----

<a href="https://infocaster.net">
<img align="right" height="200" src="https://raw.githubusercontent.com/Infocaster/.github/main/assets/Infocaster_Corner.png?raw=true">
</a>
