// Karma configuration
// Generated on Tue Jan 10 2017 23:24:30 GMT-0200 (BRST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './public/vendor/angular/angular.js',
      './public/vendor/angular-mocks/angular-mocks.js',
      './public/vendor/angular-ui-router/release/angular-ui-router.js',
      './public/vendor/angular-sanitize/angular-sanitize.min.js',
      './public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      './public/vendor/angular-dialog-service/dist/dialogs.min.js',
      './public/vendor/tg-angular-validator/dist/angular-validator.js',
      './public/vendor/moment/moment.js',
      './public/vendor/angular-moment/angular-moment.js',

      './public/vendor/angular-dialog-service/dist/dialogs.js',
      './public/vendor/angular-dialog-service/dist/dialogs-default-translations.js',
      './public/vendor/angular-moment-picker/dist/angular-moment-picker.js',
      './public/vendor/angular-spinner/dist/angular-spinner.js',

      './public/js/app.js',
      './public/js/projetos/*.js',
      './public/js/tarefas/*.js',
      './test/unit/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
