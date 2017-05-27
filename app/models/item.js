import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // id: attr(),
  deleted: attr('boolean', {
    defaultValue: false
  }),
  type: attr('string'), // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  time: attr('unix-date'), // Creation date of the item, in Unix Time.
  text: attr('string'), // The comment, story or poll text. HTML.
  dead: attr('boolean', {
    defaultValue: false
  }), // true if the item is dead.
  poll: attr(), // The pollopt's associated poll.
  url: attr('string'), // The URL of the story.
  score: attr('number'), // The story's score, or the votes for a pollopt.
  title: attr('string'), // The title of the story, poll or job.
  parts: attr(), // A list of related pollopts, in display order.
  descendants: attr('number'), // In the case of stories or polls, the total comment count.

  by: belongsTo('user'), // The username of the item's author.
  parent: belongsTo('item', {
    inverse: 'kids'
  }), // The comment's parent: either another comment or the relevant story.
  kids: hasMany('item', {
    inverse: 'parent'
  }), // The ids of the item's comments, in ranked display order.
});
