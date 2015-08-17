# ES6 Script Generator
Yeoman generator for general purpose node scripts compiled from es6. ES6 is compiled using `babel` into the `dist` directory. Support for sourcemaps is turned on.

### Usage

1. Make sure a npm project has been initialized (generator installs npm modules).
2. Make sure you have the following dependencies installed:
    - yeoman: `npm install -g yo`
    - gulp: `npm install -g gulp`
3. Install using npm `npm install generator-es6-script`.
4. `cd` to the target directory and run `yo es6-script`.
    - To include sublime text project files, use the `--sublime` flag.
5. Compile ES6 source with `gulp compile:source`. Watch for changes with `gulp watch:source`.
6. Compile tests with `gulp compile:tests`. Watch for changes with `gulp watch:tests`. Run tests with `gulp run:tests`.

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
|  -- source.js
|  -- tests.js
|- tests/
|  -- sample.js
|- tools/
|  -- gulp-run-task.js
|
```

To just get the source files, see [here](https://github.com/shahmeernavid/es6-script-starter).
