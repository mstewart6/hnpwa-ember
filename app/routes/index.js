import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      item: this.store.findRecord('item', 2921983)
    });
    // return this.store.findRecord('item', 8863);
  }
});
