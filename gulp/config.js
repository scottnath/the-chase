/**
 *  @fileOverview Primary Gulpjs configuration file
 *
 *  @author       Scott Nath
 *
 */
'use strict';

var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

var development = {
  app: 'app/',
  appHtml: 'app/index.html',
  appScssFile: 'app/styles/styles.scss',
  appCssFile: 'app/styles/styles.css',
  appCssFolder: 'app/styles/',
  appScriptFolder: 'app/scripts/'
};

var production = {
  build: 'build/'
};

module.exports = {
  angularTemplatecache: {
    config: {
      module:'templatescache',
      standalone:true
    },
    src: [
      '!app/docs/**/**.html', // ignore documentation section
      '!app/bower_components/**', // ignore bower-ingested
      '!app/index.html', // ignore app index file
      'app/**/*.html' // find all other html files
    ],
    dest: development.appScriptFolder
  },
  browsersync: {
    development: {
      server: {
        baseDir: [development.app]
      },
      host: 'localhost',
      port: 8001,
      debugInfo: false,
      open: true
    },
    production: {
      server: {
        baseDir: [production.build]
      },
      host: 'localhost',
      port: 9998,
      debugInfo: false,
      open: true
    }
  },
  build: {
    config: {
      jsFilter: '**/all-*.js',
      bowerJsFilter: '**/bower-*.js',
      cssFilter: '**/*.css'
    },
    src: development.appHtml,
    dest: production.build
  },
  compass: {
    config: {
      config_file: 'config.rb',
      css: 'app/styles',
      sass: 'app/styles',
      bundle_exec: true
    },
    src: development.appScssFile,
    dest: development.appCssFolder
  },
  cssGlobbing: {
    config: {
      extensions: ['.scss'],
      ignoreFolders: ['../styles'],
      autoReplaceBlock: {
        onOff: true,
        globBlockBegin: 'cssGlobbingBegin',
        globBlockEnd: 'cssGlobbingEnd',
        globBlockContents: '../**/*.scss'
      }
    },
    src: development.appScssFile,
    dest: development.appCssFolder
  },
  csslint: {
    config: '.csslintrc',
    src: development.appCssFile
  },
  development: development,
  eslint: {
    config: {
      configFile: '.eslintrc'
    },
    src: [ // Application javascripts
      '!app/bower_components/**', // ignore bower-ingested scripts
      'app/**/*.js'] // main application file
  },
  ghPages: {
    src: development.app
  },
  javascriptGlobbing: {
    config: {
      relative: true
    },
    src: development.appHtml,
    files: [ // Application javascripts
      '!' + development.app + '/bower_components/**', // ignore bower-ingested scripts
      '!' + development.app + '/**/*_test.js', // ignore our test scripts
      '!' + development.app + '/karma.conf.js', // ignore our karma config
      '!' + development.app + '/_gulp/**', // ignore all files in the app's _gulp directory
      development.app + '/**/*.js' // main application file
    ],
    dest: development.app
  },
  sass: {
    src:  srcAssets + '/scss/**/*.scss',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../../_assets/scss'
    }
  },
  scss: {
    config: {
      config: 'scsslintrc.yml',
      'bundleExec': true
    },
    src: [ // SASS files
      '!' + development.app + '/bower_components/**', // ignore any scss files in bower-ingested folders
      '!' + development.app + '/**/_extends.scss', '!app/**/_mixins.scss', '!app/**/_variables.scss', // ignore north-inspired files, which are brought in by their parent .scss file
      development.app + '/**/*.{sass,scss}',
      development.app + '/styles/styles.scss' // calls app style sass file, which imports the others
    ],
  },
  wiredep: {
    config: {
      cwd: development.app
    },
    bowerjson: development.app+'bower.json',
    src: development.appHtml,
    dest: development.app
  }
};

