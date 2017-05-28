import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      newStory: this.store.findRecord('new-story', 1)
    });
  }
});
