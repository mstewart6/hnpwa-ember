import ApplicationAdapter from './application';
import Ember from 'ember';
import ENV from 'hnpwa-ember/config/environment';
import fetch from 'ember-network/fetch';

const baseUrl = `${ENV.firebaseUrl}/v0`;

export default ApplicationAdapter.extend({
  findRecord(store, type, id, _snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      fetch(`${baseUrl}/showstories.json`).then(function(response) {
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
  }
});
