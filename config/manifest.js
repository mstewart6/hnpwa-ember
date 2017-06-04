'use strict';

module.exports = function() {
  return {
    name: 'hnpwa-ember',
    short_name: 'hnpwa-ember',
    description: '',
    start_url: '/top',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#ff6600',
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
};
