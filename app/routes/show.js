import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      items: this.store.query('show-story', { page: params.page || 1 })
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
