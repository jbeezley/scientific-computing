'use strict';

module.exports = {

    source: {
        templates: 'src/templates/**/*.jade',
        slides: 'src/slides/*.jade',
        js: 'src/js/**/*.js',
        styl: 'src/styl/**/*.styl',
        styliframe: 'src/ext/*.styl',
        img: 'src/img/**/*',
        files: {
          jade: 'src/templates/*.jade',
          styl: 'src/styl/main.styl',
          notes: 'src/js/vendor/notes/notes.html'
        }

    },

    browserSync: {
      html: 'build/**/*.html',
      js: 'build/js/**/*.js',
      css: 'build/css/**/*.css',
      img: 'build/img/**/*'
    },

    build: {
      html: './build/',
      js: 'build/js',
      css: 'build/css',
      cssiframe: 'build/css',
      img: 'build/img',
      notes: 'build/js/vendor/notes/'
    },

    deploy: {
      pages: 'build/**/*'
    }
};
