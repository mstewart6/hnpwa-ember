import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  comments_count: attr('number'),
  content: attr('string'),
  domain: attr('string'),
  points: attr('number'),
  time_ago: attr('string'),
  title: attr('string'),
  type: attr('string'),
  url: attr('string'),

  user: belongsTo(),
  comments: hasMany('comment', { inverse: null, async: false }),

  isExternal: Ember.computed('domain', function() {
    return !Ember.isNone(this.get('domain'));
  }),

  score: Ember.computed('points', function() {
    return this.get('points') || 0;
  }),

  commentText: Ember.computed('content', function() {
    // FIXME: this is super unsafe
    return Ember.String.htmlSafe(this.get('content'));
  }),

  hasChildren: Ember.computed('comments', function() {
    return this.get('comments.length') > 0;
  }),

  activeChildren: Ember.computed('comments.@each.deleted', function() {
    return this.get('comments').reject((comment) => {
      return comment.get('deleted');
    });
  })
});
