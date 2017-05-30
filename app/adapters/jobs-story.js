import ApplicationAdapter from './application';
import Ember from 'ember';
import ENV from 'hnpwa-ember/config/environment';
import fetch from 'fetch';

export default ApplicationAdapter.extend({
  query(store, type, filter, _snapshot) {
    let page = filter.page;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      fetch(`${ENV.apiUrl}/jobs?page=${page}`).then(function(response) {
        response.json().then((data) => {
          resolve(data);
        });
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
