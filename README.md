<h3 align="center">
<img height="100" src="https://raw.githubusercontent.com/Infocaster/.github/main/assets/infocaster_nuget_pink.svg">
</h3>

<h1 align="center">
Icomoon icon picker

[![Downloads](https://img.shields.io/nuget/dt/UrlTracker?color=ff0069)](https://www.nuget.org/packages/UrlTracker/)
[![Nuget (with prereleases)](https://img.shields.io/nuget/vpre/UrlTracker?color=ffc800)](https://www.nuget.org/packages/UrlTracker/)
![GitHub](https://img.shields.io/github/license/Infocaster/UrlTracker?color=ff0069)

</h1>

The Icomoon icon picker allows you to use an Icomoon project to create your own icons and import them into Umbraco via a custom Property Editor.
This package gives the content editor complete control over which icons can be used on their website and select them themselves.

## Requirements
The Icomoon icon picker requires you to set up an Icomoon account.

## Getting started
The Icomoon icon picker is available via [NuGet](https://www.nuget.org/packages/UrlTracker/).

## Installation
Installing the Icomoon icon picker is quick and easy, just install the NuGet package and follow these steps:

1. Go to the backoffice and create a new Data Type.
2. There should be a new Property Type called `Icomoon icon picker`.
3. Select this new Property Type and enter the name and code of your Icomoon project (these can be found [here](https://icomoon.io/app/#/select/image) in the url shown under Development Links and Production Links. The code is the part after `public` in the URL). 
4. Save the Property Type. It is now available to use in any Document Type you want!

## How to use
After selecting an icon the model will now contain a string with the correct value.
Assuming the value in your model is called `Icon` the icon can be used as shown below.

```
<svg class="icon @Icon">
    <use xlink:href="#@Icon"></use>
</svg>
```

## Credits
Created by Infocaster

<a href="https://github.com/Infocaster/UrlTracker/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Infocaster/UrlTracker" />
</a>

*Made with [contributors-img](https://contrib.rocks).*

-----