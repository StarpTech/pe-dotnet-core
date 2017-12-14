# pe-dotnet-core
[Progressive enhancement](https://www.shopify.com/partners/blog/what-is-progressive-enhancement-and-why-should-you-care) with .NET Core &amp; React

## Getting Started

1. Checkout Repository
2. Go to [wwwroot](https://github.com/StarpTech/pe-dotnet-core/tree/master/src/pe-dotnet-core/wwwroot)
```
npm i
npm start
```
3. Go to [root](https://github.com/StarpTech/pe-dotnet-core/tree/master/src/pe-dotnet-core) and start the .NET Core Application
```
$ dotnet run
```

## Production Build

```
npm run build
```

## Architecture

- Render entry pages with Razor Pages.
- Provide REST API and consume it from the frontend.
- Use Entity Framework as ORM.
- Use React as Web-Component library to build dynamic user-interfaces.
- Use Brunch as frontend build tool.
- Use PWA capabilities (Service Workers, Preloading ...) to provide a more realiable and faster user experience.
- Build Page specific Javascript bundles.

## Demo Project

The application is small catalog about devices around the world. The locations are displayed on an OpenStreetMap App.
