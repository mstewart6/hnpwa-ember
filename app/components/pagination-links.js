import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pagination'],

  showPrevious: Ember.computed('page', function() {
    return Number.parseInt(this.get('page'), 10) > 1;
  }),

  showNext: Ember.computed('count', function() {
    return this.get('count') === 30;
  })
});
