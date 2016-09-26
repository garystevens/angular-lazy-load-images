# angular-lazy-load-images

> A angular directive for progressively loading images based on window position

## Installation

or via NPM

```
$ npm install --save angular-lazy-load-images
```

or the simple way, by including ``/dist/angular-lazy-load-images.min.js`` into the head of your HTML.


## Usage
Follow these steps to get it working in your project. In ```src``` you can see a working example of the module and play around with it. Alternatively, just follow these steps.

### Adding to your Angular project
You can add the module as a dependency after declaring your own module, like so:
```
angular
    .module('myApp', ['angular-lazy-load-images'])
    .config(config)
    .run(run);
```
The directive is now available to your app and can be used in your HTML.

### HTML
To include the directive, use the following markup:
```
<image-loader-directive
    img-class="loader"
    img-url="{{ url }}"
    img-width="300"
    img-height="300"
    img-alt="A sample alt message">
</image-loader-directive>
```
## Support

This module has been developed to support versions of Angular from ``1.2.2`` up to ``1.4.5`` - If IE8 support is required please make sure to use Angular 1.2.

## Browser Support
This module has been developed to support all modern browsers will providing legacy support for IE8 and up.

## Development
If you wish to contribute or amend the source files and recompile you can do so by running the local development tasks.

You will need to install the dependencies by running ``npm install`` then run the default gulp task by running ``gulp``. This will create a local server and run the uncompiled version of the assets. The files are then visible at: ``http://localhost:8001``

Unit tests are still to be added.

## Roadmap

* Unit tests
