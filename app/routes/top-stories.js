import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('post', { favorite: true });
  }
});
