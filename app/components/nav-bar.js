import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar'],
  routing: Ember.inject.service('-routing'),

  links: [
    'top',
    'new',
    'show',
    'ask',
    'jobs'
  ],

  activePath: Ember.computed('routing.currentRouteName', function() {
    return this.get('routing.currentRouteName');
  })
});
