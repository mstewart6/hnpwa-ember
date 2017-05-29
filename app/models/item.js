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
  }),

  authorName: Ember.computed.alias('by.id'),

  isExternal: Ember.computed('url', function() {
    return !Ember.isNone(this.get('url'));
  }),

  commentText: Ember.computed('text', function() {
    // FIXME: this is super unsafe
    return Ember.String.htmlSafe(this.get('text'));
  }),

  hasChildren: Ember.computed('kids', function() {
    return this.get('kids.length') > 0;
  }),

  activeChildren: Ember.computed('kids.@each.deleted', function() {
    return this.get('kids').reject((kid) => {
      return kid.get('deleted');
    });
  })
});
