# ES6 Script Generator
Yeoman generator for general purpose node scripts compiled from es6. ES6 is compiled using `babel` into the `dist` directory. Support for sourcemaps is turned on.

### Usage

0. Make sure you have the following dependencies installed:
    - yeoman: `npm install -g yo`
    - gulp: `npm install -g gulp`;
1. Install using npm `npm install generator-es6-script`.
2. `cd` to the target directory and run `yo es6-script`.
3. Compile ES6 source with `gulp compile`. Watch for changes with `gulp watch`.

### Details
This generator adds the following files to the target directory:

```
|
|- Gulpfile.js
|- index.js
|- .gitignore
|- src/
|  -- main.js
|- tasks/
|  -- build.js
|- tools/
|  -- gulp-run-task.js
|
```

To just get the source files, see [here](https://github.com/shahmeernavid/es6-script-starter).
