import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      topStory: this.store.findRecord('top-story', 1)
      // topStory: this.store.queryRecord('top-story', { filter: { id: 1, page: params.page } })
    });
  }
});
