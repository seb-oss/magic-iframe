![CI](https://github.com/sebgroup/magic-iframe/workflows/CI/badge.svg?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d)

SEB:s Magic iframe adds responsiveness to iframes as well as the ability to listen to events, override styles and show custom loaders when the iframe is loading content (requires that the content is loaded from the same domain). Built as generic web component with [Stencil](https://stenciljs.com/).

## Demo and example
See live demo here: https://sebgroup.github.io/magic-iframe/

## Usage

Depending on the framework you're using there are different ways this component can be loaded, the most common ones being:

- Script file from CDN
- Local script (downloaded with npm)
- Using import

Once the script is added you just use the `<seb-magic-iframe>` element tag like any other element (more info below).

### With script tag

- Put these two script tags in the head of your index.html document:
```html
<script type="module" src="https://unpkg.com/@sebgroup/magic-iframe/dist/magic-iframe/magic-iframe.esm.js"></script>
<script nomodule src="https://unpkg.com/@sebgroup/magic-iframe/dist/magic-iframe/magic-iframe.js"></script>
```
The first script will be used by modern browsers supporting modules, the second one is only needed if you need to support older browser like IE etc. that don't support loading modules.
This will load the latest version of the component if you want to use a specific version just add `@{version}` to the package name in the url, e.g. `https://unpkg.com/@sebgroup/magic-iframe@1.0.0/dist/magic-iframe/magic-iframe.js` to load version `1.0.0`.


### With npm
- Run `npm install @sebgroup/magic-iframe --save`
- Add the scripts from the node_modules folder to your index.html document (same as above), but instead of loading from `unpkg` you reference the same files now located in the node_modules folder e.g:
 ```html
 <script type="module" src="node_modules/@sebgroup/magic-iframe/dist/magic-iframe/magic-iframe.esm.js"></script>
 <script nomodule src="node_modules/@sebgroup/magic-iframe/dist/magic-iframe/magic-iframe.js"></script>
 ```

### In a stencil app
- Run `npm install @sebgroup/magic-iframe --save`
- Add an import to the npm packages `import @sebgroup/magic-iframe;`


### In template, JSX, html etc.
Once the script has been added you're free to use the element anywhere in your template, JSX, html etc. like this:

**Basic**

```html
<seb-magic-iframe source="/foo/bar/index.html"></seb-magic-iframe>
```

**Advanced**

```html
<seb-magic-iframe source="/foo/bar/index.html"
                  styles="body { background: white; }"
                  styleUrls="['/assets/css/external-stylesheet.css', '/assets/css/fonts.css']"
                  autoResize="false"
                  resizeDebounceMillis="0">
                  <!-- SLOT FOR LOADING INDICATOR -->
</seb-magic-iframe>
```

## Options
For more options see [component documentation](/src/components/seb-magic-iframe/readme.md).

## Local development

To run this project locally, clone the repository (or make a fork):

```bash
git clone https://github.com/sebgroup/magic-iframe.git
```

Install dependencies and start app:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```


