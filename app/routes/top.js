import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      topStory: this.store.findRecord('top-story', 1)
    });
  }
});
