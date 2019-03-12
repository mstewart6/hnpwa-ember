'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "hnpwa-ember",
    short_name: "hnpwa-ember",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#de350d",
    icons: [
      {
        src: '/assets/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/assets/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
