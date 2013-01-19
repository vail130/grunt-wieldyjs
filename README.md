
# Grunt Task for WieldyMarkup [![Build Status](https://secure.travis-ci.org/vail130/grunt-wieldyjs.png)](http://travis-ci.org/vail130/grunt-wieldyjs)

This repo is a grunt task for rendering [WieldyMarkup](https://github.com/vail130/wieldymarkup-js) templates. Integrate with [Yeoman](http://yeoman.io) for a better workflow!

## Getting Started

Install this plugin with the command:

```js
npm install grunt-wieldyjs
```

Next, add this line to your project's grunt file:

```js
grunt.loadNpmTasks("grunt-wieldyjs");
```

Lastly, add the configuration settings (see below) to your grunt file.

## Documentation

This task has two required properties, `src` and `dest`, and one optional property, `options`:

* `src` should be a glob matching all files.
* `dest` should be a directory in which to reproduce the directory tree of files matching the `src` glob.
* Both `src` and `dest` will be evaluated relative to the grunt.js file.
* Files matching `src` will overwrite files in the `dest` directory.
* `options` should be an object with key-value pairs.
* The only currently supported option is `basePath`, which should be the prefix to remove from the path of files matching `src`.

An example configuration looks like this:

```js
grunt.initConfig({
  wieldyjs: {
    compile: {
      src: 'src/**/*.wml',
      dest: 'dest/',
      options: {
        basePath: 'src/'
      }
    }
  }
});
```
