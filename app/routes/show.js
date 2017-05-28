import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      showStory: this.store.findRecord('show-story', 1)
    });
  }
});
