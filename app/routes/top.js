import Ember from 'ember';

export default Ember.Route.extend({
  modelName: 'top-story',

  model(params) {
    return this.store.query('top-story', { page: params.page || 1 });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
