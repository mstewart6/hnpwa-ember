import Adapter from 'ember-data/adapter';
import Ember from 'ember';
import ENV from 'hnpwa-ember/config/environment';
import fetch from 'fetch';

const baseUrl = `${ENV.firebaseUrl}/v0`;

export default Adapter.extend({
  findRecord(store, type, id, _snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      fetch(`${baseUrl}/${type.modelName}/${id}.json`).then(function(response) {
        response.json().then((data) => {
          if(data === null) {
            resolve({
              id: id
            });
          } else {
            resolve(data);
          }
        });
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
