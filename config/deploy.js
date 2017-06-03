/* jshint node: true */
const functions = require('firebase-functions');

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    gzip: {
      ignorePattern: '{fastboot/*.js,*.json,vendor*,hnpwa-ember*}',
      keep: true
    },
    s3: {
      bucket: 'hnpwa-ember',
      region: 'us-east-1'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if(deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if(deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if(deployTarget === 'production') {
    ENV.build.environment = 'production';

    // This is just a placeholder to not leak keys, doesn't actually deploy this way
    ENV.s3.accessKeyId = functions.config().s3.access_key;
    ENV.s3.secretAccessKey = functions.config().s3.secret;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
