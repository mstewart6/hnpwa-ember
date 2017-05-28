import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      jobsStory: this.store.findRecord('jobs-story', 1)
    });
  }
});
