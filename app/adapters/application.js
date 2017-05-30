import Adapter from 'ember-data/adapter';
import Ember from 'ember';
import ENV from 'hnpwa-ember/config/environment';
import fetch from 'fetch';

export default Adapter.extend({
  findRecord(store, type, id, _snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      fetch(`${ENV.apiUrl}/${type.modelName}/${id}`).then(function(response) {
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
