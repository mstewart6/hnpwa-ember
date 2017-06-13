import Ember from 'ember';

export default Ember.Route.extend({
  modelName: 'ask-story',

  model(params) {
    return this.store.query('ask-story', { page: params.page || 1 });
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
