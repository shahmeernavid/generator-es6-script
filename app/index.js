var yo = require('yeoman-generator');

module.exports = yo.Base.extend({
    init: function () {
        this.copy = function (src, dest) {
            this.fs.copy(this.templatePath(src),
                    this.destinationPath(dest));
        };
    },

    constructor: function () {
        yo.Base.apply(this, arguments);

        this.option('sublime');
    },

    writeTemplates: function () {
        this.copy('src', 'src');
        this.copy('tasks', 'tasks');
        this.copy('tools', 'tools');
        this.copy('index.js', 'index.js');
        this.copy('_gitignore', '.gitignore');
        this.copy('Gulpfile.js', 'Gulpfile.js');
        if (this.options.sublime) {
            this.copy('es6.sublime-project', 'es6.sublime-project');
        }
    },

    dependencies: function () {
        this.npmInstall('gulp');
        this.npmInstall('gulp-babel');
        this.npmInstall('gulp-mocha', { saveDev: true });
        this.npmInstall('gulp-sourcemaps');
        this.npmInstall('gulp-util');
        this.npmInstall('source-map-support');
    }
});
