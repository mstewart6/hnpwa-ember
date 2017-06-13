import Ember from 'ember';

export default Ember.Route.extend({
  modelName: 'jobs-story',

  model(params) {
    return this.store.query('jobs-story', { page: params.page || 1 });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
