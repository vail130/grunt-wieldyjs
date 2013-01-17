## About

This task renders WieldyMarkup templates into HTML.

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

This task has two required properties, `src` and `dest`. `src` is the path to your source file and `dest` is the file this task will write to (relative to the grunt.js file). If this file already exists **it will be overwritten**.

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

### Optional Configuration Properties

TBD

