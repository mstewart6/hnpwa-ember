import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pagination'],

  previousPage: Ember.computed('page', function() {
    return Number.parseInt(this.get('page'), 10) - 1;
  }),

  showPrevious: Ember.computed('page', function() {
    return Number.parseInt(this.get('page'), 10) > 1;
  }),

  nextPage: Ember.computed('page', function() {
    return Number.parseInt(this.get('page'), 10) + 1;
  }),

  showNext: Ember.computed('count', function() {
    return this.get('count') === 30;
  })
});
