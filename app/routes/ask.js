import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      askStory: this.store.findRecord('ask-story', 1)
    });
  }
});
