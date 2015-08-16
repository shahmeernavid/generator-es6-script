var yo = require('yeoman-generator');

module.exports = yo.Base.extend({
    init: function () {
        this.copy = function (src, dest) {
            this.fs.copy(this.templatePath(src),
                    this.destinationPath(dest));
        };
    },

    writeTemplates: function () {
        this.copy('src', 'src');
        this.copy('tasks', 'tasks');
        this.copy('tools', 'tools');
        this.copy('index.js', 'index.js');
        this.copy('_gitignore', '.gitignore');
        this.copy('Gulpfile.js', 'Gulpfile.js');
    },

    dependencies: function () {
        this.npmInstall('gulp');
        this.npmInstall('gulp-babel');
        this.npmInstall('gulp-sourcemaps');
        this.npmInstall('gulp-util');
    }
});
