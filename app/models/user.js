import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  delay: attr('number'), // Delay in minutes between a comment's creation and its visibility to other users.
  created: attr('unix-date'), // Creation date of the user, in Unix Time.
  karma: attr('number'), // The user's karma.
  about: attr('string'), // The user's optional self-description. HTML.

  submitted: hasMany('item') // List of the user's stories, polls and comments.
});
