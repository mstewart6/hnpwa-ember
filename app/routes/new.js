import Ember from 'ember';

export default Ember.Route.extend({
  modelName: 'new-story',

  model(params) {
    return this.store.query('new-story', { page: params.page || 1 });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
