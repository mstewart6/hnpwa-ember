import ApplicationAdapter from './application';
import Ember from 'ember';
import ENV from 'hnpwa-ember/config/environment';
import fetch from 'fetch';

const baseUrl = `${ENV.firebaseUrl}/v0`;

export default ApplicationAdapter.extend({
  findRecord(store, type, id, _snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      fetch(`${baseUrl}/topstories.json`).then(function(response) {
        // This api endpoint just returns an array of item ids, so keep a fixed id for the returned data
        response.json().then((data) => {
          resolve({
            id: id,
            items: data
          });
        });
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  },

  queryRecord(store, type, filter, _snapshot) {
    let id = filter.id || 1,
        page = filter.page || 1,
        size = filter.size || 30;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      fetch(`${baseUrl}/topstories.json`).then(function(response) {
        // This api endpoint just returns an array of item ids, so keep a fixed id for the returned data
        response.json().then((data) => {
          let start = (page - 1) * size;

          resolve({
            id: id,
            items: data.slice(start, start + size)
          });
        });
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
