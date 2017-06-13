import Ember from 'ember';

export default Ember.Route.extend({
  modelName: 'show-story',

  model(params) {
    return this.store.query('show-story', { page: params.page || 1 });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
