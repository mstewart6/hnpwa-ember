import Adapter from 'ember-data/adapter';
import Ember from 'ember';
import ENV from 'hnpwa-ember/config/environment';

const baseUrl = `${ENV.firebaseUrl}/v0`;

export default Adapter.extend({
  findRecord(store, type, id, _snapshot) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(`${baseUrl}/${type.modelName}/${id}.json`).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
