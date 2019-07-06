# A Webpack configuration file for basic front-end website development

*This package is for anybody looking to take advantage of Webpack 4's impressive speed, moving from the likes of Grunt or Gulp for straightforward front-end compilation tasks. I use this, or variations thereof, for organic website development with Laravel and Homestead*

- Compiles sass > css, minifies, and extracts to separate css file
- Transpiles javascript es6 to es5, minifies, and concatenates plugins
- Defines jQuery ($) globally
- Encodes small images and fonts to base64 for faster loading
- Runs Browsersync for hot reloading

## Install npm packages

```js
npm install
```

## Run

```
npm run prod
```

## Produces/assumes the following directory structure

```

your project root
│	assets.version.php
│
└───public directory (usually public or public_html - clone the package here)
│   │   index.js
│   │   package.json
│   │	webpack.config.js
│   │
│   └───dev (put all your raw/uncompiled assets in here)
│	│	│
│	│	└───scss
│	│			main.scss
│	│	└───js
│	│			main.js
│   
└───build (compiled output)
│	│
│	└───css
│	│		main.css
│	└───js
│	│		main.js

```

