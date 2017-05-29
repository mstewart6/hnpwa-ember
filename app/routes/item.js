import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      item: this.store.findRecord('item', params.item_id)
    });
  }
});
