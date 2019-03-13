/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer')
const targets = require('./config/targets')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-critical': {
      enabled: true,
      critical: {
        minify: true,
        penthouse: {
          forceInclude: [
            '.hnpwa-header',
            '.all-stories',
            '.list-story',
          ],
        },
      },
    },

    'asset-cache': {
      version: '6',
      include: [
        'assets/hnpwa*.js',
        'assets/**/**/*',
      ],
      exclude: [
        'assets/**/*.map',
        'assets/vendor*.js',
        'assets/vendor*.css',
        'assets/images/**/*',
        'assets/fonts/**/*'
      ],
    },

    'esw-cache-first': {
      patterns: [
        '/assets/images/(.+)',
        '/assets/fonts/(.+)'
      ],
    },

    'esw-cache-fallback': {
      patterns: [
        'https://api.hackerwebapp.com/(.+)',
      ],
    },

    postcssOptions: {
      compile: {
        enabled: false,
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: targets.browsers,
            },
          },
        ],
      },
    },

    emberCliConcat: {
      enabled: true,
      outputDir: 'assets',
      outputFileName: 'hnpwa',
      useSelfClosingtags: false,
      wrapScriptsInFunction: false,
      treeTypes: ['all'],
      js: {
        useAsync: true,
        concat: true,
        contentFor: 'concat-js',
        header: null,
        footer: null,
        preserveOriginal: true,
      },
      css: {
        concat: false,
        contentFor: 'concat-css',
        header: null,
        footer: null,
        preserveOriginal: true,
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
