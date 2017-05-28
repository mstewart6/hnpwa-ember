import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  deleted: attr('boolean', {
    defaultValue: false
  }),
  type: attr('string', {
    defaultValue: 'story'
  }),
  time: attr('unix-date', {
    defaultValue: function() {
      return new Date();
    }
  }),
  text: attr('string'),
  dead: attr('boolean', {
    defaultValue: false
  }),
  poll: attr(),
  url: attr('string'),
  score: attr('number'),
  title: attr('string'),
  parts: attr(),
  descendants: attr('number'),

  by: belongsTo('user'),
  parent: belongsTo('item', {
    inverse: 'kids'
  }),
  kids: hasMany('item', {
    inverse: 'parent'
  }),

  host: Ember.computed('url', function() {
    let url = this.get('url');

    if(url) {
      return `(${new URL(url).hostname})`;
    } else {
      return '';
    }
  })
});
